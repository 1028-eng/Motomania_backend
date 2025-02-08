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
},{
    timestamps: true,
    versionKey: false
})

const UserModel= mongoose.model(
    'user',
    UserSchema
)

module.exports = UserModel