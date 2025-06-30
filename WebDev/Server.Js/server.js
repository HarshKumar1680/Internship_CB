const http = require('http');
const port = 8080;

const server =  http.createServer((req,res) =>{
    console.log(req.url)
    res.end('hello, here is my requested data');
});
server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started at', port)
});