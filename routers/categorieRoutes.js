const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

router.post('/', categoriesController.createCategory);
router.post('/', categoriesController.getCategory);
module.exports = router