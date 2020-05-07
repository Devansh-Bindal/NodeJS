const router = require('express').Router();
const item = require('./controller');

router.post('/items', item.create);
router.get('/items', item.getAll)
router.delete('/items/:id',item.delete)
router.patch('/items/id',item.update)
module.exports = router;