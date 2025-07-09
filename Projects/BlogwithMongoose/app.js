const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Blog = require('./models/blogs');

const app = express();
const PORT = 4444;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

// Redirect root to /blogs
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

// GET route to render form
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render('blogs', { blogs }); // pass blogs to view
    } catch (err) {
        console.error("Error fetching blogs:", err);
        res.status(500).send("Error fetching blogs");
    }
});

// POST route to save blog
app.post('/blogs', async (req, res) => {
    const { title, description } = req.body;

    try {
        const blog = new Blog({ title, description });
        await blog.save();
        res.redirect('/blogs'); // ✅ redirect after saving
    } catch (err) {
        console.error('Mongoose Save Error:', err);
        res.status(500).send('Error saving blog: ' + err.message);
    }
});


// Connect to MongoDB
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
