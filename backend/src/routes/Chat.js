const express = require('express');
const router = express.Router();
const {sendMessage, getMessages} = require('../controllers/Chat');
const {requireSignIn} = require('../common-middleware');


router.post('/message', requireSignIn, sendMessage);
router.get('/message', getMessages);

module.exports = router;