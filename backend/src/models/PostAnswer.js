const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    content: {type: String, required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
    images: [],
}, {timestamps: true});

module.exports = mongoose.model('Answer', answerSchema);