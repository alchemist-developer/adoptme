const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./src/routes');
const handleError = require('./src/middlewares/handleMiddleware');
const db = require('./src/database');
const port = process.env.APP_PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

db.hasConection()

app.use(routes)

app.use(handleError)

app.listen(6000 || port, () => console.log('Servidor no ar!'))