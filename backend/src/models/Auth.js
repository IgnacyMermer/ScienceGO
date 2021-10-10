const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true, trim: true, min: 3, max: 20},
    lastName: {type: String, required: true, trim: true, min: 3, max: 20},
    username: {type: String, required: true, trim: true,unique: true, lowercase: true, min: 3, max: 20},
    email: {type: String, required: true, trim: true, unique:true, lowercase: true},
    password: {type: String, required: true,min: 5, max: 20},
    role: {type: String, enum:['User', 'Admin'], default: 'Admin'},
    contactNumber: {type: String},
    profilePicture: {type: String},
}, {timestamps: true});


userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
});

userSchema.methods = {
    authenticate: async function(password){
        return await bcrypt.compare(password, this.password);
    },
};

module.exports = mongoose.model('User', userSchema);