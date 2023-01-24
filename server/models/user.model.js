const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: [true, "That username has already been taken."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "That email already belongs to an existing account."]

    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [4, "Password must be 4 characters or longer."]
    }
}, { timestamps: true });

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10);
        console.log('Hashed Password: ', hashedPassword)
        this.password = hashedPassword
        next()
    }catch{
        console.log('error: ', error)
    }
})

module.exports = mongoose.model('User', UserSchema);