const CollectionController = require('../controllers/collection.controller');

module.exports = (app) => {
    app.post('/api/createcollection', CollectionController.createCollection)
    app.get('/api/viewcollections', CollectionController.getCollections)
    app.get('/api/viewcollection/:id', CollectionController.getCollectionById)
    app.put('/api/updatecollection/:id', CollectionController.updateCollection)
    app.delete('/api/deletecollection/:id', CollectionController.deleteCollection)
    app.put('/api/addtocollection/:id', CollectionController.addDrinkToCollection)
}