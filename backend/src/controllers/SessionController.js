// A única responsabilidade da rota de login é verificar se a ong realmente existe, assim, validando seu login
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return response.status(400).json({ error: 'No ONG found with this ID' });
    }

    return response.json(ong);
  }
}