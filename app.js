const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./routes/api');
const keys = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${keys.mongoDB.username}:${keys.mongoDB.password}@ds225382.mlab.com:25382/workshop-react`, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongoose connected');
  });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/frontend/build')); // Serve static files from React build folder

app.use('/api', routes);

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/frontend/build/index.html'); // Serve React's index.html file on all routes
  res.sendFile(__dirname + '/routes/api/index.html'); // Serve React's index.html file on all routes
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});