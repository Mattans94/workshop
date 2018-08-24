const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../../models/User');

//home page
router.post('/registration', (req, res, next) => {
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
        age: parseInt(req.body.age)
      })
        .save()
        .then(newUser => {
          res.json({
            success: true,
            user: newUser
          });
        });
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

module.exports = router;
