// login, logout, register
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/register', (req, res) => {
    res.render('register.html');
});

router.post('/register', (req, res) => {
    req.body;
    res.render('index.html');
});

router.get('/', (req, res) => {
    res.render('index.html');
});
s
router.post('/', (req, res) => {
    res.render('index.html');
});

module.exports = router;