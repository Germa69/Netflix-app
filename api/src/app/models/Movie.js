const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String },
        image: { type: String },
        subTitle: { type: String },
        thumbnail: { type: String },
        trailer: { type: String },
        video: { type: String },
        year: { type: String },
        limit: { type: Number },
        genre: { type: String },
        isSeries: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Movie", Movie);
