const {Schema, model} = require("mongoose");

const newsSchema = new Schema (  
    {
    title: String,
    url: String,
    description: String,
    date: Date,
    },
{ versionKey: false, timestamps: true }
);

const News = model("news", newsSchema);

module.exports = News;