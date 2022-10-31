const { MongoClient, ObjectId } = require('mongodb') //mongoDB

const connectionURL = 'mongodb://localhost:27017'
const dbName = 'project'

let db
const init = () => {
    MongoClient.connect(connectionURL, { useNewUrlParser: true })
        .then(
            (client) => { db = client.db(dbName) }
        )
}
const insertItem = (item) => {
    const collection = db.collection('items')
    return collection.insertOne(item)
}
const getItems = () => {
    const collection = db.collection('items')
    return collection.find({}).toArray()
}
const updateQuantity = (id, quantity) => {
    const collection = db.collection('items')
    return collection.updateOne({ _id: ObjectId(id) }, { $set: { quantity } })
}

module.exports = {init, insertItem , getItems , updateQuantity}