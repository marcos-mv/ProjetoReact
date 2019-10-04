const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://user01:user01@projetoreact-8jti9.mongodb.net/projetoreact?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

//GET,POST,PUT,DELETE

//req.query = acessar query params (para filtros)
//req.params = para acessar(edição e delete)
//req.params = para acessar(para criação, edição de registros)

app.use(express.json()); 
app.use(routes);

app.listen(3333);

