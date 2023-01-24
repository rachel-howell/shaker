const CocktailController = require('../controllers/cocktail.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/create', authenticate, CocktailController.createCocktail)
    app.get('/api/getAll', CocktailController.getCocktails)
    app.get('/api/getOne/:id', CocktailController.getCocktailById)
    app.put('/api/update/:id', authenticate, CocktailController.updateCocktail)
    app.delete('/api/delete/:id', authenticate, CocktailController.deleteCocktail)
    app.get('/api/lettersearch/:char', CocktailController.getCocktailByLetter)
}