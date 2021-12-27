// Multer adds a body object and a file or files object to the request 
// object. The body object contains the values of the text fields of the form, 
// the file or files object contains the files uploaded via the form.
const multer  = require('multer') 
const express = require("express"); 
const dotenv = require("dotenv"); 
const cors = require("cors"); 
dotenv.config();

const app = express(); 
app.use(cors()); 
app.use(express.json());

const receivedInput = []

const processedOutput = {
  "blocks": [
      {
          "begin_col": 5,
          "begin_row": 0,
          "end_col": 32,
          "end_row": 5
      },
      {
          "begin_col": 1,
          "begin_row": 7,
          "end_col": 48,
          "end_row": 11
      },
      {
          "begin_col": 10,
          "begin_row": 11,
          "end_col": 14,
          "end_row": 11
      },
      {
          "begin_col": 15,
          "begin_row": 14,
          "end_col": 40,
          "end_row": 21
      }
  ]
}

app.get("/", (req, res)=>{
  res.send(processedOutput)
})

// uploaded file will go into the ./uploads folder
//Accept a single file with the name fieldname - in our case textFile


app.post("/", multer({ dest: './uploads/' }).single('textFile'), (req, res) => {
    console.log(req.file)
    // req.body hold the text fields
    receivedInput.push(req.body);
    res.send(receivedInput);
  });

  app.listen(3001, () => console.log("server is running")); // starts the server on the specified PORT

  module.exports = app;