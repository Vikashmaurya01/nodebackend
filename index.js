require('dotenv').config()
const express = require('express')
const app =express()
const port = 4000

app.get('/' , (req,res) =>{
    res.send('hello world')
})

app.get('/instagram',(req,res)=>{
    res.send('Vikash ')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login Here </h1>')
})
app.listen(process.env.PORT ,()=>{
    console.log(`Example app ${port}`)
})