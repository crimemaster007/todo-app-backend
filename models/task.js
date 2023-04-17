import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: String,
        default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // in reference to mongoose collection name
        required: true,
    },
    createdAt: {
        type: Date,
        Default:Date.now,
    }
});

export const User = mongoose.model("User", schema);