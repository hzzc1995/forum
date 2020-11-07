import bodyParser from 'body-parser';
import express from 'express';
import sessionRouter from './routes/session';
import topicRouter from './routes/topic';

var path = require('path');

var app = express();

app.use('/public/', express.static(path.join(__dirname, './public/')));

app.use('/node_modules/', express.static(path.join(__dirname, './public/')));

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, './views/'));  // optional

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(sessionRouter);
app.use(topicRouter);

app.listen(3000, () => {
    console.log('running on http://127.0.0.1:3000/');
});