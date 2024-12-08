const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
require('dotenv').config()
const app = express()

app.use(cors({
    origin: 'http://localhost:5174', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));


const PORT = process.env.PORT || 3002



app.use(express.json())


app.use('/', routes)
app.use('/items', routes)


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}!`)
})


