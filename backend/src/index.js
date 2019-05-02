const cookieParser = require('cookie-parser')
require('dotenv').config({path: 'variables.env'})
const createServer = require('./createServer')
const db = require('./db')
const jwt = require('jsonwebtoken')

const server = createServer()

// get the cookies from the request in a neat object format
server.express.use(cookieParser())

// decode the jwt token so we can get the user id on each request
server.express.use((req, res, next) => {
    const {token} = req.cookies
    if (token) {
        const {userId} = jwt.verify(token, process.env.APP_SECRET)

        // put the userId onto the request for future requests to access
        req.userId = userId
    }
    next()
})

// TODO use express middleware to populate current user


server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        }
    },
    deets => {
        console.log(`Server is now running on port http://localhost:${deets.port}`)
    }
)