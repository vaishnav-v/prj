var express = require('express')
var bodyparser = require('body-parser')
const path = require('path')
const routes = require("./routes")
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use('/api', routes)
app.use(cors())
app.use(express.static(path.join(__dirname,"docs")))
app.use('/', express.static(path.join(__dirname,"docs")))

PORT = process.env.PORT || 4200
app.listen(PORT, () => {
    console.log("started on", PORT);
    console.log(__dirname+'./docs');
})
