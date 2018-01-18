const app = require('express')();
const MongoClient = require('mongodb').MongoClient;

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const DB_URL = process.env.DB_URL || "not_valid";

app.get('/db', (req, res) => {
  MongoClient.connect(DB_URL, (err, connection) => {
    res.send({
      database: (connection ? 'OK': 'KO')
    });
  });
});

app.get('/me', (req, res) => {
  res.send({
    'username': username,
    'password': '*******'
  });
});

// start server
const APPLICATION_PORT = process.env.APPLICATION_PORT || '3000';
app.listen(APPLICATION_PORT, () => {
  if (!username || !password) {
    throw Error('Authentication must be initialized !');
  }
  console.log(`Server is listening on port ${APPLICATION_PORT} ..`);
  if (process.env.NODE_ENV != 'production') {
    console.log(`Using username ${username}.`);
  } else {
    console.log('Go to "/me" ');
  }
});
