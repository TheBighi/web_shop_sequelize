const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = require('./util/db');

sequelize.authenticate()
  .then(() => {
    console.log('Ok, successful.');
  })
  .catch(err => {
    console.error('UNABLE TO CONNECT:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});