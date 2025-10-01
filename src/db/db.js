let mongoose = require('mongoose')

function connectToDb(){

    mongoose.connect('mongodb-uri/notes').then(
        ()=>{
            console.log('Connected To DB');
            
        }
    )
}

module.exports = connectToDb;
