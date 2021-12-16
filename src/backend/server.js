const multer  = require('multer') 
const express = require("express"); 
const dotenv = require("dotenv"); 
const cors = require("cors"); 
dotenv.config();

const app = express(); 
app.use(cors()); 
app.use(express.json());

const receivedInput = []

app.post("/", multer({ dest: './uploads/' }).single('textFile'), (req, res) => {
    console.log(req.file)
    receivedInput.push(req.body);
    res.send(receivedInput);
  });

  app.listen(3001, () => console.log("server is running")); // starts the server on the specified PORT

  module.exports = app;