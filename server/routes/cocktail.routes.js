const CocktailController = require('../controllers/cocktail.controller');

module.exports = (app) => {
    app.post('/api/create', CocktailController.createCocktail)
    app.get('/api/getAll', CocktailController.getCocktails)
    app.get('/api/getOne/:id', CocktailController.getCocktailById)
    app.put('/api/update/:id', CocktailController.updateCocktail)
    app.delete('/api/delete/:id', CocktailController.deleteCocktail)
}