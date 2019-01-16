var mongoose  = require('mongoose');
var Schema =  mongoose.Schema;
var bcyrpt = require('bcrypt-nodejs');

var schema = new Schema({

    email: {type:String, require:true},
    username: {type:String,require:true},
    password: {type:String,require:true},
    creation_dt: {type:Date,require:true}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcyrpt.compareSync(hashPassword,this.password);
}

schema.methods.isValid = function(password){
    return bcyrpt.compareSync(hashPassword,this.password);
}

module.exports = mongoose.model('User',schema);
