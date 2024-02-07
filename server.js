const express = require('express');
const app = express();
const port = 3000;

// once a request is received send this to the page 
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

// to listen for web request 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

