const app = require('express')()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 3000

const errRoutes = require('./routes/errors')
const routes = require('./routes/routes')

const listener = () => console.log(`Listening on port: ${port}`)

app.use(cors())
app.disable('x-powered-by')
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use('/posts', routes)
app.use('/posts', errRoutes)

app.listen(port, listener)

module.exports = app
