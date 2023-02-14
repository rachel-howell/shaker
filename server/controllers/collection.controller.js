const Collection = require('../models/collection.model')

module.exports = {
    createCollection: (req,res) => {
        Collection.create(req.body)
            .then(collection => res.json(collection))
            .catch(err => res.status(400).json(err))
    },
    getCollections: (req,res) => {
        Collection.find()
            .then(collections => res.json(collections))
            .catch(err => res.status(400).json(err))
    },
    getCollectionById: (req,res) => {
        Collection.findOne({_id: req.params.id})
            .then(collection => res.json(collection))
            .catch(err => res.status(400).json(err))
    },
    updateCollection: (req,res) => {
        Collection.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(collection => res.json(collection))
            .catch(err => res.status(400).json(err))
    },
    deleteCollection: (req,res) => {
        Collection.findOneAndDelete({_id: req.params.id})
            .then(collection => res.json(collection))
            .catch(err => res.status(400).json(err))
    }
}