const express = require("express"); // to create API endpoints
const dotenv = require("dotenv"); // reading the .env file
const cors = require("cors"); // accepting requests from the browser
dotenv.config();

const app = express(); // creates the server
app.use(cors()); // includes cors as a middleware for accepting requests from the browser
app.use(express.json()); // parse the body of the requests as a JSON when the content type is application/json

