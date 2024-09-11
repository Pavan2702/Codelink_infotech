import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide a name'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please Provide a email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please Provide a password'],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiery: String,
})

const User = mongoose.models.users || mongoose.model('User', userSchema);

export default User;