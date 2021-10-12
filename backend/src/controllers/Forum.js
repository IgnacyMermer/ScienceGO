const Post = require('../models/Post');

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
    Post.find({_id: req.body._id}).populate('answers').exec().then(post=>{
        return res.status(200).json({
            post
        })
        .catch(error=>{
            return res.status(400).json({
                error
            })
        })
    })
}