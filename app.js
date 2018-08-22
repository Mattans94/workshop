const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./routes/api');
app.use(express.static('public'));

app.use('/api', routes);


app.listen(port, () => {
  console.log('Listening on port 4000');
});