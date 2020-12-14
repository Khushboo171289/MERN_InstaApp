const env = require('dotenv');

//Environment variable 
env.config();

module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
  } 