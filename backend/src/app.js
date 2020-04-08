const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

//Versao de produção colocar onde o app esta hospedado
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
//app.listen(3333);
/**
 * Rota / Recursos
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Cria uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: deletar uma  informação no back-end
  * 
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, uitilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySql, SQLite, PostSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * from users
     * Query Builder: table('users').select('*').where()
     */



