const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = 8080


// ESTO ES LO MISMO QUE EL BODY PARSER PERO DE EXPRESS 
app.use(express.json())

const postRoute = require('./routes/post')
app.use('/servicios', postRoute)

app.get('/healt',(req,res)=>{
    res.status(200).send('EL API ESTA ARRIBA')
})

const connectDB = mongoose.connect('mongodb+srv://CAPIADSO:aDSO20242@cluster0.mkoq5ml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
if(connectDB)console.log('Esta connectado a MONGO')


app.listen(PORT,()=>{
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})

