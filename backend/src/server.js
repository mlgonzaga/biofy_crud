const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
require('dotenv').config()
const app = express()


const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);


const PORT = process.env.PORT || 3002



app.use(express.json())


app.use('/', routes)
app.use('/items', routes)


app.listen(PORT, '0.0.0.0',()=>{
    console.log(`Server running on port ${PORT}!`)
})


