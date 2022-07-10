const app = require('./app')

const port = process.env.PORT || 4500
app.listen(port, () => console.log('Servidor no ar!'))