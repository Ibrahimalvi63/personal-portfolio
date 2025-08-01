const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv');
const http = require('http');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(cors());
app.use(express.json());



server.listen(port, () => {
    console.log("Your app is running")
})
