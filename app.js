const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');
const api = process.env["API_URL"]
const productsRouter = require('./routers/products');



//Middle ware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Routers
app.use(`${api}/products`, productsRouter)





mongoose.connect(process.env.CON_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'e-shopdb'
})
    .then(() =>{
        console.log("Database connected")
    })
    .catch((err) =>{
        console.log(err);
    })

app.listen(3000, ()=> {
    console.log('Server is now running on http://localhost:3000');
})