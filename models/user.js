var mongoose        = require("mongoose");
    bcrypt          = require("bcrypt-nodejs")


// Mongoose Model Config

var userScheme = new mongoose.Schema({
    email: {type: String, lowercase: true, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: true}
})

userScheme.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userScheme.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userScheme);