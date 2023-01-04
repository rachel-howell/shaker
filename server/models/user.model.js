const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."]
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