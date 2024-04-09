const mongooose = require('mongoose')

const UserSchema = mongooose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel = mongooose.model('users',UserSchema)

module.exports= UserModel;