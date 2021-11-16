import mongoose from "mongoose"

const {Schema, model} = mongoose

const albumschema = new Schema({
    title : {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    artist: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    featuring: {
        type: String,
        required: true,
        max: 255,
        min: 1,
    },
    image: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    genre: {
        type: String,
        required :true,
        max: 255,
        min: 1
    },
    songs: {
        type: Number,
        required: true,
        max: 100,
        min: 1
    },
    records: {
        type: String,
        required: true,
        max: 255,
        min: 1

    },
    list: {
        type: Array,
        required: true,
        default: []

    },
    date: {
        type: Date,
        default: Date.now
    }

})
export const Album  = model("Album", albumschema)