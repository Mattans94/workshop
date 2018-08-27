const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const routes = require('./routes/api');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
mongoose
  .connect(
    `mongodb://${keys.mongoDB.username}:${
    keys.mongoDB.password
    }@ds225382.mlab.com:25382/workshop-react`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Mongoose connected');
  });

// CORS setup
app.use(cors());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new MongoStore({
    url: `mongodb://${keys.mongoDB.username}:${
      keys.mongoDB.password
      }@ds225382.mlab.com:25382/workshop-react`
  })
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/frontend/build')); // Serve static files from React build folder
app.use((req, res, next) => {
  console.log('asdasda');
  next();
})

app.use('/api', routes);

app.get('*', (req, res) => {
  console.log('hej');
  res.sendFile(__dirname + '/frontend/build/index.html'); // Serve React's index.html file on all routes
  // res.sendFile(__dirname + '/routes/api/index.html'); // Serve React's index.html file on all routes
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
