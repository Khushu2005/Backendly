const mongoose = require('mongoose');

function connectToDb() {
  mongoose.connect('mongodb://localhost:27017/auth')
    .then(() => {
      console.log("Connected to Db Successfully");
    })
    .catch((err) => {
      console.log("Error while connecting to Db", err);
    });
}

module.exports = connectToDb;
