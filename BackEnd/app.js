const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./src/routes');
const handleError = require('./src/middlewares/handleMiddleware');
const db = require('./src/database');
const upload = require('./src/configs/upload')

// teste

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(upload.any())
app.use(express.urlencoded({extended:true}))
app.use(express.static('src/public'))

db.hasConection()

app.use(routes)

app.use(handleError)

const port = process.env.PORT || 4500
app.listen(port, () => console.log('Servidor no ar!'))