const express = require('express');
const router = express.Router();
const controller = require('../controllers/todosController');

router.get('/gettodo', controller.getTodos);
router.post('/addtodo', controller.addTodo);
router.post('/deletetodo', controller.deleteTodo);
router.post('/moveup', controller.moveUp);
router.post('/movedown', controller.moveDown);

module.exports = router;
