const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.loginUser)
    app.get('/api/logout', UserController.logOutUser)
    app.get('/api/users', UserController.showUsers)
    app.get('/api/checkloginstatus', UserController.isUserLoggedIn)
    app.put('/api/updatefaves/:id', UserController.updateUserFavorite)
}