const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

//static files
app.use(express.static(path.join(__dirname, './frontend/dist')))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, './frontend/dist/index.html'));
});


//port
const port = process.env.PORT || 5000

app.use(cors());

//greeting api

app.get('/api/v1/greet', (req, res) => {
  const {name} = req.query;

  if(!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.json({ message: `Hello, ${name}! Welcome to Younglabs.`})
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});