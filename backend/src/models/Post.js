const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    answers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'
        }
    ],
    images: [],
    category: {type: String, required: true, default: 'matematyka'}
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);