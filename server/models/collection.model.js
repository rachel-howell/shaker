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
    drinkList: [{
        key: {
            type: String
        },
        strDrinkThumb: {
            type: String
        },
        strDrink: {
            type: String
        }
    }],
    creator: {
        type: String
    },
    privacy: {
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model('Collections', CollectionSchema);