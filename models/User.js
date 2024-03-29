const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    img: {
        type: Object,
    },
    appointmentDate: {
        type: String
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;