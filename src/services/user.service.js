const UserModel = require("../models/user.model")

async function dbInsertUser( newProduct ) {
    return await UserModel.create( newProduct )
}

async function dbGetUser() {
    return await UserModel.find({}).select('-password -createdAt -updatedAt')  
    return await UserModel.find({},{ password: 0, createdAt: 0, updatedAt: 0 })   
}

async function dbGetUserById( id ) {
    return await UserModel.findById( id ) 
}

async function dbDeleteUserById( id ) {
    return await UserModel.findByIdAndDelete( id ) 
}

async function dbUpdateUserById( id, newProduct ) {
    return await UserModel.findByIdAndUpdate( 
        id,
        newProduct,
        { new: true }      
    );
}


module.exports = {
    dbInsertUser,
    dbGetUser,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById
};