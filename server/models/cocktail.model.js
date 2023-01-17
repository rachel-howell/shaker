const mongoose = require('mongoose');

const CocktailSchema = new mongoose.Schema({
    strDink: {
        type: String
        // required: [true, "Drink name is required."]
    },
    strGlass: {
        type: String
        // required: [true, "Glass type is required."]
    },
    strDrinkThumb: {
        type: String
        // required: [true, "Image URL is required."]
    },
    strIngredient1: {
        type: String
        // required: [true, "At least one ingredient required."]
    },
    strIngredient2: {
        type: String
    },
    strIngredient3: {
        type: String
    },
    strIngredient4: {
        type: String
    },
    strIngredient5: {
        type: String
    },
    strIngredient6: {
        type: String
    },
    strIngredient7: {
        type: String
    },
    strMeasure1: {
        type: String
        // required: [true, "At least one ingredient required."]
    },
    strMeasure2: {
        type: String
    },
    strMeasure3: {
        type: String
    },
    strMeasure4: {
        type: String
    },
    strMeasure5: {
        type: String
    },
    strMeasure6: {
        type: String
    },
    strMeasure7: {
        type: String
    },
    strInstructions: {
        type: String
        // required: [true, "Instructions required."]
    },
    creator: {
        type: String
    }

}, { timestamps: true });


module.exports = mongoose.model('Cocktail', CocktailSchema);