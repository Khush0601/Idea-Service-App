//create server
const express=require('express')
const app=express()


// middleware for converting json into js objects
app.use(express.json())

//bind the app with routes
require('./routes/idea.routes')(app)



// start the server

app.listen(8080,()=>{
    console.log('started the server on port 8080')
})