const express = require('express');
require('./config/mongoose.config');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 8000;

app.use(express.json(), express.urlencoded({extended: true}));
// require('./routes/shaker.routes')(app);

app.listen(PORT, ()=>{
    console.log(`Server is up and running at port ${PORT}.`)
})