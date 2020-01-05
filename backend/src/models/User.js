const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

userData = {email: 'admin@bookstore.com.br', name: 'Admin', password: bcryptjs.hashSync('admin', 8)};
User.findOneAndUpdate({email: userData.email}, userData, {upsert: true}, (err, user) => {
    if(err) console.log(err);
    if(!user) {
        console.log(`User admin is created`);
    }
});

module.exports = User;