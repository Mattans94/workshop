const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../../models/User');

//home page
router.post('/registration', (req, res, next) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      res.json({
        success: false,
        msg: 'User already exists'
      });
    } else {
      new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
      })
        .save()
        .then(newUser => {
          res.json({
            success: true,
            user: newUser
          });
        })
        .catch(err => console.log(err));
    }
  });
});

router.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      res.json({
        success: false,
        msg: 'User not found'
      });
    } else if (
      user.email === req.body.email &&
      user.password === req.body.password
    ) {
      res.json(user);
    } else {
      res.json({
        success: false,
        msg: 'Invalid password'
      });
    }
  });
});

router.post('/profile', (req, res) => {
  // HITTA ANVÄNDARE I DB
});

// Simulated login, remove this endpoint later on
router.get('/login', (req, res) => {
  User.findById('5b8061dd6212216a70ff9bd5').then(user => {
    res.json(user);
  });
});

module.exports = router;
