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
        unique: true,
        required: true 
    },
    profile_image: { 
        type: String, 
    },
    password: { 
        type: String, 
        required: true 
    },
    auth_token: {
        type: String,
        unique: true,
        required: [true, 'auth token is required']
    },
    status: {
        type: Number,
        default: 1
    },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

const User = mongoose.model('user', UserSchema);

module.exports = User;