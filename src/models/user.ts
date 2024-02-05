import mongoose from 'mongoose';

const user_schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },

    phone_number: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const user_model = mongoose.model('user_details', user_schema)

export default user_model;

