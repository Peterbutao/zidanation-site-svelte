import mongoose from "mongoose";

const { model, Schema } = mongoose
const songschema = new Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        maax: 100
    },
    artist: {
        type: String,
        required: true,
        min: 1,
        maax: 100
    },
    featuring: {
        type: String,
        required: true,
        default: "none",
        min: 1,
        maax: 100
    },
    album: {
        type: String,
        required: true,
        default: "single",
        min: 1,
        max: 255
    },
    image: {
        type: String,
        required: true,
        min: 1,
        maax: 255
    },
    source: {
        type: String,
        required: true,
        min: 1,
        maax: 255
    },
    category: {
        type: String,
        required: true,
        min: 1,
        maax: 100
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const Song =  model("Song", songschema) 