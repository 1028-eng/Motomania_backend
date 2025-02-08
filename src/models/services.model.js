const mongoose = require( "mongoose" );

const serviceSchema = new mongoose.Schema({
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

const serviceModel = mongoose.model(
    "service",
    serviceSchema
);

module.exports = serviceModel;