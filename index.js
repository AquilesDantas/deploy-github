const express= require('express');
const res = require('express/lib/response');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', () => res.send(`<h1 Execuntando na porta: ${PORT} </h1>`));
app.listen(PORT, () => console.log(`Online na porta: ${PORT}`));