const Cocktail = require('../models/cocktail.model')

module.exports = {
    createCocktail: (req,res) => {
        Cocktail.create(req.body)
            .then(cocktail => res.json(cocktail))
            .catch(err => res.status(400).json(err))
    },
    getCocktails: (req,res) => {
        Cocktail.find()
            .then(cocktail => res.json(cocktail))
            .catch(err => res.status(400).json(err))
    },
    getCocktailById: (req,res) => {
        Cocktail.findOne({_id: req.params.id})
            .then(cocktail => res.json(cocktail))
            .catch(err => res.status(400).json(err))
    },
    updateCocktail: (req,res) => {
        Cocktail.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(cocktail => res.json(cocktail))
            .catch(err => res.status(400).json(err))
    },
    deleteCocktail: (req,res) => {
        Cocktail.findOneAndDelete({_id: req.params.id})
            .then(cocktail => res.json(cocktail))
            .catch(err => res.status(400).json(err))
    }
}