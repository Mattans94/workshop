const express = require('express');
const router = express.Router();
const path = require('path');

//home page
router.post('/registration', (req, res, next) => {
  // res.json(req.body);
  res.send('HOME PAGE');
});

router.get('/login', (req, res) => {

});

router.post('/profile', (req, res) => {
  // HITTA ANVÄNDARE I DB
  User.find()
  res.json(user);
});



module.exports = router;