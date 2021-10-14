const express = require('express');
const router = express.Router();
const {addPost, getPosts, getConcretePost, addAnswer} = require('../controllers/Forum');

router.get('/posts', getPosts);

router.post('/post', addPost);

router.post('/concretepost', getConcretePost);

router.post('/answerpost', addAnswer)

module.exports = router;