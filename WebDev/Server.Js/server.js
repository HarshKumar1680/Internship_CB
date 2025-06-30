const http = require('http');
const port = 8080;

const server =  http.createServer((req,res) =>{
    console.log(req.url)
    res.writeHead(200,{
        "Content-type" : 'text/html'
    });
    res.end('<h1>hello, here is my requested data</h1>');
});
server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started at', port)
});