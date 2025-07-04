const express = require('express');
const app = express();

function m1(req,res,next){
    console.log('Running m1');
    next();

}
function m2(req,res,next){
    console.log('Running m2');
     next();
}
function m3(req,res,next){
    console.log('Running m3');
     next();
}

app.use(m1);
app.use(m2);
app.use(m3);
app.use(express.urlencoded({extended:true}));//middleware

app.get('/', (req,res)=>{
res.send('learning middle ware')
})

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
})