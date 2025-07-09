const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 4444;

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

// Routes
app.get('/blogs', (req, res) => {
    res.render('blogs');
});

app.post('/blogs', async (req, res) => {
    const { title, description } = req.body;

    try {
        const blog = new Blog({ title, description });
        await blog.save();
        res.send('Blog Saved Successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving blog');
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
