const genereteUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  //rota para listar todas as ongs do banco de dados:
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs); 
  },

//rota de cadastro de ongs:
  async create (request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = genereteUniqueId(); //função de teste

    await connection('ongs').insert({
      id, 
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }
};