const express = require('express')
const router = require('./router')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 8080

app.use(express.static('dist'))
app.use(cors())
app.use(router)

app.listen(port, () => console.log(`Listening on port ${port}!`))
