const express = require('express');
const path = require('path');
const router = express.Router();

const controller = require('../controller/blogs');

router.get('/blogs',controller.getBlogs );
router.post('/blogs',controller.postBlogs );



module.exports = router;