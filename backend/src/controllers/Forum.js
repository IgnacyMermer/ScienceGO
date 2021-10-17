const Post = require('../models/Post');
const Answer = require('../models/PostAnswer');

exports.addPost = (req, res, status) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        user: req.body.user,
    });

    post.save().then(result => {
        return res.status(200).json({
            post: result
        });
    }).catch(error => {
        return res.status(400).json({
            error
        });
    });
}

exports.getPosts = (req, res, status) => {

    Post.find({}).select('user title content category answers images _id').populate('user', 'firstName username').exec().then(posts => {
        return res.status(200).json({
            posts
        });
    }).catch(error => {
        return res.status(400).json({
            error
        });
    });
}

exports.getConcretePost = (req, res, status) => {
    Post.findOne({_id: req.body._id}).populate([{path: 'answers', populate:{path: 'user'}}, {path: 'user'}]).exec().then(post=>{
        return res.status(200).json({
            post
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error
        })
    })
}

exports.addAnswer = (req, res, status) => {
    
    const answer = new Answer({
        content: req.body.content,
        user: req.body.user,
        post: req.body.post
    });

    answer.save().then(result=>{
        Post.findOneAndUpdate(
            {_id: req.body.post}, 
            {
                "$push": {
                    "answers": result._id
                }
            }, 
            {new: true, upsert: true}
        )
        .exec()
        .then(post=>{
            return res.status(200).json({
                answer: result,
                post: post
            });
        })
    }).catch(error=>{
        res.status(400).json({
            error: error
        })
    })
}