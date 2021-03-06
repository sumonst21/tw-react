const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formSchema = require('./models/Form');
const keys = require('./config/keys');

// const prod = require('./config/prod');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const url = keys.mongo;

mongoose.Promise = global.Promise;

mongoose.connect(
	keys.mongo,
	{ useNewUrlParser: true },
	(err, db) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Connected to ${db.db.databaseName}`);
		}
	}
);

app.post('/thank-you', (req, res) => {
	const Form = mongoose.model('forms', formSchema);

	const formData = new Form(req.body);
	console.log('req.body:', req.body);

	formData
		.save()
		.then(form => {
			console.log('form:', form);
			res.send('Form submitted.\n' + JSON.stringify(req.body));
		})
		.catch(err => {
			console.log(err);
			res.status(400).send(`Form was not submitted. Error: ${err}`);
		});
});

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// Like main.js or main.css
	app.use(express.static('client/build'));

	const path = require('path').default;

	// Express will serve up index.html
	// If it doesn't recognize route
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

console.log('process:', process.env.NODE_ENV || PORT);
