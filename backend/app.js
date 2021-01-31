/*framework*/
const express = require('express');
/*middleware*/
const bodyParser = require('body-parser');
const path = require('path');

const userRoutes = require('./routes/user');
const app = express();


const commentRoutes = require('./routes/comment');
const articleRoutes = require('./routes/articles');

/*CORS middleware appliqué à toutes les routes*/
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/auth', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/comment', commentRoutes);





module.exports = app;


