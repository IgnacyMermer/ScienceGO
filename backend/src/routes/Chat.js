const express = require('express');
const router = express.Router();
const {sendMessage, getMessages} = require('../controllers/Chat');


router.post('/message', sendMessage);
router.get('/message', getMessages);

module.exports = router;