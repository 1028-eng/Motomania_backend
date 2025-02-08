const mongoose = require( "mongoose" );

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
     userId: {
            type: mongoose.Schema.ObjectId,
            ref: "user"
    
        }
})

const categoryModel = mongoose.model(
    "category",
    categorySchema
);

module.exports = categoryModel;