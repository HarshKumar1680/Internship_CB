const express = require('express');
const app = express();

function m1(req,res,next){
    console.log('Pre Running m1');
    //    if(req.query.q == 1){
    //     return res.send('Hello World!');
    // }
    next();
      console.log('Post Running m1');

}
function m2(req,res,next){
    console.log('Pre Running m2');
 
     next();
      console.log('Post Running m2');
}
function m3(req,res,next){
   console.log('Pre Running m3');
     next();
      console.log('Post Running m3');
}

app.use(m1);
app.use(m2);
app.use(m3);
app.use(express.urlencoded({extended:true}));//middleware

app.get('/', (req,res)=>{
    console.log('Pre sending responce');
res.send('learning middle ware');
console.log('Post sending response');
})

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
})