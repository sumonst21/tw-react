const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formSchema = require('./models/Form');
const keys = require('./config/keys');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const url = keys.mongo;

mongoose.Promise = global.Promise;

mongoose.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Connected to ${db.db.databaseName}`);
  }
});

const Form = mongoose.model("forms", formSchema);

app.post('/thank-you', (req, res) => {
  const formData = new Form(req.body);
  console.log('req.body:', req.body);

  formData.save()
    .then(form => {
      console.log('form:', form);
      res.send("Form submitted.\n" + JSON.stringify(req.body));
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(`Form was not submitted. Error: ${err}`);
    });
});

app.get('/thank-you', (req, res) => {
  res.send('Thank You');
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});