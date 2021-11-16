import mongoose from "mongoose"

const {model, Schema} = mongoose

const feedschema = new Schema({
    feedback : {
        type: String,
        max: 500,
        min: 1,
        required: true
    },
    date : {
        type: Date,
        default:Date.now
    }
})

export const Feed = model("Feed", feedschema);