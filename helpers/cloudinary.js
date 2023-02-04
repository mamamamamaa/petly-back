const express = require("express");

const app = express();
require("dotenv").config();
// To upload image to server
const cloudinary = require("cloudinary").v2;

// To extract data from incoming request
const bodyParser = require('body-parser');

// To get file paths, remove files
// const fs = require('fs')

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { CLOUDINARY_API_SECRET, CLOUDINARY_API, CLOUDINARY_CLOUD_NAME} = process.env;

// cloudinary configuration
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API,
    api_secret: CLOUDINARY_API_SECRET
});

module.exports = cloudinary;