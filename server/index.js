const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const connection = mongodb.MongoClient.connect('mongodb://timwheelercom:TWheeler91$@ds133632.mlab.com:33632/timwheelercom', { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/thank-you', (req, res) => {
  connection.then((db) => {
    delete req.body._id; // for security reasons
    db.collection('forms').insertOne(req.body);
  });
  res.send('Thank you! \n' + JSON.stringify(req.body));
});

// app.get('/thank-you', (req, res) => {
//   connection.then((db) => {
//     db.collection('forms').find({}).toArray().then((forms) => {
//       res.status(200).json(forms);
//     })
//   })
// });


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});