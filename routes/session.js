// login, logout, register
import express from 'express';
import User from '../models/user';
import md5 from 'blueimp-md5';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/register', (req, res) => {
    res.render('register.html');
});

router.post('/register', (req, res) => {

    const body = req.body;

    User.findOne({
        $or: [{
            email: body.email
        },
        {
            nickname: body.nickname
        }]
    }, (err, data) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Server Error'
            });
        }

        // email/nickname exists
        if (data) {
            // return JSON response
            return res.status(200).json({
                err_code: 1,
                message: 'email or nickname already exists'
            });
        }

        body.password = md5(md5(body.password));
        new User(body).save((err, user) => {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Server Error'
                });
            }

            // response can not be string since the ajax request requires a json format response
            // the provided json method by Express can convert the object to string and send to browser
            res.status(200).json({
                err_code: 0,
                message: 'ok'
            });
        });
    });
});

router.get('/', (req, res) => {
    res.render('index.html');
});
s
router.post('/', (req, res) => {
    res.render('index.html');
});

module.exports = router;