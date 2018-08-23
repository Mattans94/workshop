const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./routes/api');
app.use(express.static(__dirname + '/frontend/build')); // Serve static files from React build folder

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/frontend/build/index.html'); // Serve React's index.html file on all routes
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});