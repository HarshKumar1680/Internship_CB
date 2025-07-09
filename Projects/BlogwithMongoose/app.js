const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 4444;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

const routeHandler = require('./routes/blogsRoute');
app.use('/',routeHandler);

app.get('/', (req, res) => {
    res.redirect('/blogs');
});



mongoose.connect('mongodb://127.0.0.1:27017/blogapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');


    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
