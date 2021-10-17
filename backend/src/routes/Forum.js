const express = require('express');
const { requireSignIn } = require('../common-middleware');
const router = express.Router();
const {addPost, getPosts, getConcretePost, addAnswer} = require('../controllers/Forum');

router.get('/posts', getPosts);

router.post('/post', requireSignIn, addPost);

router.post('/concretepost', getConcretePost);

router.post('/answerpost', requireSignIn, addAnswer)

module.exports = router;