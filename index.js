const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('views'))

app.get('/game',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/\index.html'));
})

app.listen(3000,()=>{
    console.log('working')
})