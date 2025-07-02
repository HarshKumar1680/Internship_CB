const express = require('express');
const PORT = 8888;
const app = express();

app.get(`/`,(req,res)=>{
    console.log(req);
    res.send(`<h1>Hello Harsh</h1>`);
})

app.listen(PORT,(err)=>{
    console.log(`Server Started at http://localhost:${PORT}`)
})
