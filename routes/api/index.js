const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.json(req.body);
  res.send('hejsan');
});


module.exports = router;