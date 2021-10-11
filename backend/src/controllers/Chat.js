const Message = require("../models/Message")


exports.sendMessage = (req, res, status)=>{
    
    const message = new Message({
        user: req.body.payload.user,
        text: req.body.payload.text,
        date: req.body.payload.date
    });
    
    message.save().then(result=>{
        return res.status(200).json({
            message: result
        })
    }).catch(err=>{
        return res.status(400).json({
            err
        })
    });
}

exports.getMessages = (req, res, status)=>{
    
    Message.find({}).select('user text date').populate('user', 'username firstName').exec().then(result=>{
        res.status(200).json({
            messages: result
        })
    }).catch(error=>{
        res.status(400).json({
            error
        })
    })
}