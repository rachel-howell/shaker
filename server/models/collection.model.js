const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, "A collection with that name already exists in the database."],
        required: [true, "Title required."]
    },
    description: {
        type: String
    },
    drinks: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('Collections', CollectionSchema);