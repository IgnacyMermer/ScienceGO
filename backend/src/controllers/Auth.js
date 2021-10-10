const shortid = require('shortid');
const User = require('../models/Auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signIn = (req, res, status)=>{
    User.findOne({email: req.body.email}).exec().then(async user=>{
        if(user){
            if(await user.authenticate(req.body.password)){
                const token = jwt.sign({
                    _id: user._id,
                    role: user.role,
                }, 'thisIsSecretKey', {expiresIn: '2h'});

                const {_id, firstName, lastName, email} = user;
                
                res.status(200).json({
                    message: 'Logged in',
                    user: {
                        _id, firstName, lastName, email
                    },
                    token
                })
            }
        }
        else{
            res.status(400).json({
                message: "User not exists"
            })
        }
    }).catch(error=>{
        res.status(400).json({
            error
        })
    })
}

exports.signUp = (req, res, status)=>{
    User.findOne({email: req.body.email}).exec().then(async user=>{
        if(user){
            res.status(400).json({
                message: "User already exists"
            });
        }
        else{
            
            const hashPassword = await bcrypt.hash(req.body.password, 10);

            const user = new User({
                email: req.body.email,
                password: hashPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: shortid.generate(),
                role: req.body.role!==null?req.body.role:'Admin'
            });

            user.save().then(user=>{

                const token = jwt.sign({
                    _id: user._id,
                    role: user.role,
                }, 'thisIsSecretKey', {expiresIn: '2h'});

                const {_id, firstName, lastName, email} = user;

                return res.status(200).json({
                    message: "sign up success",
                    user: {_id, firstName, lastName, email},
                    token
                });
            })
        }
    }).catch(err=>{
        res.status(400).json({
            err
        });
    });
}

exports.signOut = (req, res, status)=>{
    res.clearCookie('token');
    res.status(200).json({
        message: 'Signout successfully'
    });
}