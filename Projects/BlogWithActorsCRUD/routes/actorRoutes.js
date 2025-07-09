 const express = require('express');
const router = express.Router();
const actorCtrl = require('../controllers/actorController');

router.get('/', actorCtrl.index);
router.get('/new', actorCtrl.newForm);
router.post('/', actorCtrl.create);
router.post('/:id/delete', actorCtrl.delete);

module.exports = router;

