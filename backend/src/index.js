const express = require('express'); //importando o modulodo 'express' para dentro da variavel express.
const cors = require('cors');
const routes = require('./routes');
const app = express(); //variavel que armazena nossa aplicação.

app.use(cors());
app.use(express.json()); //Para que o body (corpo) reconheça que estamos adicionando um recurso no formato json.
app.use(routes);

app.listen(3333);
