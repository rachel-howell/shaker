const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
require('./config/mongoose.config');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const whitelist = ["http://localhost:3000","http://127.0.0.1", "http://34.219.71.254/", "http://shakerr.io"]
const corsOptions = {
    origin: (origin, callback) => {
        // if (!origin || whitelist.indexOf(origin) !== -1) {
        if (true) {
        callback(null, true)
        } else {
        callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))


require('dotenv').config();

const cookieParser = require('cookie-parser')
app.use(cookieParser())

const Routes = require('./routes/user.routes')
Routes(app)

const CocktailRoutes = require('./routes/cocktail.routes')
CocktailRoutes(app)

const CollectionRoutes = require('./routes/collection.routes')
CollectionRoutes(app)

app.listen(PORT, ()=>{
    console.log(`Server is up and running at port ${PORT}.`)
})
