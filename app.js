import bodyParser from 'body-parser';
import express from 'express';
import sessionRouter from './routes/session';
import topicRouter from './routes/topic';
import session from 'express-session';

var path = require('path');

var app = express();

app.use('/public/', express.static(path.join(__dirname, './public/')));

app.use('/node_modules/', express.static(path.join(__dirname, './public/')));

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, './views/'));  // optional

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// session is an object which can be added or read
app.use(session({
    secret: 'salt value',
    resave: false,
    saveUninitialized: true // assign cookie even if no session
  }));


app.use(sessionRouter);
app.use(topicRouter);

// 404 middleware
app.use((req, res) => {
  res.send('404 not found');
});

// middleware to handle error
app.use((err, req, res, next) => {
  res.status(500).json({
    err_code: 500,
    message: err.message
  });
});

app.listen(3000, () => {
    console.log('running on http://127.0.0.1:3000/');
});