const Blog = require('../models/blogs');
module.exports.getBLogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render('blogs', { blogs }); // pass blogs to view
    } catch (err) {
        console.error("Error fetching blogs:", err);
        res.status(500).send("Error fetching blogs");
    }
};
module.exports.postBLogs = async (req, res) => {
    const { title, description } = req.body;

    try {
        const blog = new Blog({ title, description });
        await blog.save();
        res.redirect('/blogs'); // ✅ redirect after saving
    } catch (err) {
        console.error('Mongoose Save Error:', err);
        res.status(500).send('Error saving blog: ' + err.message);
    }
};
