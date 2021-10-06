const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');




app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
