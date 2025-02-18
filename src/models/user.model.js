const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    role: {
        type: String,
        enum: [ "registered", "moderator", "admin" ],
        default: "registered"
    }
},{
    timestamps: true,
    versionKey: false
})

const UserModel= mongoose.model(
    'user',
    UserSchema
)

module.exports = UserModel