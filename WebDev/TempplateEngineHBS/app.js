const express = require('express');
const app = express();
const PORT = 8888;
const path = require ('path');

// Segtup the hbs engine
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));
//if folder name is myfolder
//app.set('views', 'myfolder');


// app.get(`/`, (req, res) => {    
//     res.sendFile(path.join(__dirname, 'index.html'));
// })

// app.get('/learnhbs',(req,res)=>{
//     res.render('index.hbs', { 
//         title: "My Page"
//     });
// })

let tasklist = [];

app.get('/', (req,res)=>
{
    res.render('index',{
        tasklist
    })
})

app.post('/addtask', (req,res)=>
{
    tasklist.push(req.body.task);
    res.redirect('/');
})



app.listen(PORT, (err) => {
    console.log(`Server Started at http://localhost:${PORT}`)
})