const express = require('express');
const app = express();
const PORT = 8000;
require('./config/mongoose.config');

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}))


require('dotenv').config();
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const Routes = require('./routes/user.routes')
Routes(app)


app.listen(PORT, ()=>{
    console.log(`Server is up and running at port ${PORT}.`)
})