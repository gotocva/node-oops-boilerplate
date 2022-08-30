import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * User schema
 */
const UserSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    profile_image: { 
        type: String, 
    },
    password: { 
        type: String, 
        required: true 
    },
    profile_image: { 
        type: String, 
    },
    auth_token: {
        type: String,
        required: [true, 'auth token is required']
    },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

const User = mongoose.model('user', UserSchema);

module.exports = User;