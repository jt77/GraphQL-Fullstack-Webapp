const cookieParser = require('cookie-parser')
require('dotenv').config({path: 'variables.env'})
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()


// get the cookies from the request in a neat object format
server.express.use(cookieParser())

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