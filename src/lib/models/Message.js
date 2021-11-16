import mongoose from "mongoose"

const {model, Schema}  = mongoose

const messageschema = new Schema({
    name : {
        type: String,
        required: true,
        max:250,
        min:1
    },
    email : {
        type: String,
        required: true,
        max: 500,
        min:1
    },
    subject : {
        type: String,
        max:250,
        min:1
    },
    message : {
        type: String,
        required: true,
        max:1000,
        min:1
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const Message = model("Message", messageschema)