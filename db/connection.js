require('dotenv').config();

const mongoose = require('mongoose');
let mongoDB = process.env.DB_CONNNECTION;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true });
let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;
