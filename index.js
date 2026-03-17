const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/db');
const models = require('./models/index');

sequelize.Models = models;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));



app.use((req, res, next) => {
  console.log("HERE IS REQ " + req);
  models.User.findByPk(1)
  .then(user => {
    console.log("HERE IS USER " + user);
    req.user = user;
    next();
  })
  .catch(err => {
    console.error('Error fetching user:', err);
    next(err);
  });
});





const productAdminRoutes = require('./routes/admin/products');
app.use('/admin', productAdminRoutes);

const productRoutes = require('./routes/products');
const Cart = require('./models/cart');
app.use(productRoutes);

const shopRoutes = require('./routes/shop');
app.use(shopRoutes);

sequelize.sync({ force: true })
  .then(() => {
    return models.User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return models.User.create({ name: 'Sander', email: 'sander@example.com' });
    }
    return user;
  })
  .then(user => {
    return user.createCart()
  })
  .then((cart) => {
    console.log("HERE IS CART " + cart);
    app.listen(port)
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

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