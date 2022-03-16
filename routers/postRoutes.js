const router = require('express').Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/', postController.getPost)
router.get('/', postController.getAllPost)
module.exports = router