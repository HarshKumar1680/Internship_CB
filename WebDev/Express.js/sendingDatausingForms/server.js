const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.urlencoded({extended:true}));

app.get(`/`, (req, res) => {    
    res.sendFile(__dirname+ '/index.html')

})
 app.get('/greet',(req,res)=>{
    res.send(`Hello! Goodmorning , ${req.query.name}`);
 })

//  app.post('/greet',(req,res)=>{
//     res.send(`hello! Goodevening , ${req.query.name}`);
//  } )
  app.post('/greet',(req,res)=>{
    res.send(`hello! Goodevening , ${req.body.name}`);
 } )

app.listen(PORT, (err) => {
    console.log(`Server Started at http://localhost:${PORT}`)
})