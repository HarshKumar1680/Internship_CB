 const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogController');

router.get('/', blogCtrl.index);
router.get('/new', blogCtrl.newForm);
router.post('/', blogCtrl.create);
router.get('/:id', blogCtrl.detail);
router.get('/:id/edit', blogCtrl.editForm);
router.post('/:id/update', blogCtrl.update);
router.post('/:id/delete', blogCtrl.delete);

module.exports = router;

