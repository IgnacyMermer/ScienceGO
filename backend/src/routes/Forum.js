const express = require('express');
const router = express.Router();
const {addPost, getPosts, getConcretePost} = require('../controllers/Forum');

router.get('/posts', getPosts);

router.post('/post', addPost);

router.post('/concretepost', getConcretePost);

module.exports = router;