const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/login')

const db = mongoose.connection
db.on('error', console.log.bind(console, "error")) //database connection
db.once('open', (x) => {
    console.log("connection successful");
})

//article Schema
const articleSchema = new mongoose.Schema({
    articleName:{
        type:'string',
        required : true
    },
    content:{
        type:'string',
        required:true
    },
    uploadDate:{
        type:'string',
        required:true
    }

})

const articlesCollection = mongoose.model('articles',articleSchema) //collection and schema
module.exports = articlesCollection