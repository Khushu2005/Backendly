let mongoose = require('mongoose')

function connectToDb(){

    mongoose.connect('mongodb+srv://ks0541929:75HmfWb8wuhFGCoc@cluster0.zkem9e2.mongodb.net/notes').then(
        ()=>{
            console.log('Connected To DB');
            
        }
    )
}

module.exports = connectToDb;
