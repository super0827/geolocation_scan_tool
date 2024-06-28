import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        lat: {
            type: String,
            required: true
        },
        lng: {
            type: String,
            required: true
        }
    },
    profile: {
        type: String,
    },
    accuracy: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", UserSchema);

export default User;