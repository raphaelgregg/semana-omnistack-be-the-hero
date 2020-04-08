const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('INCIDENT', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new Incident', async () => {
    const response = await request(app)
    .post('/incidents')
    //.set('Authotrization','d007dd1a')
    .send({
      title: "Caso validacao",
      description: "Detalhes do caso",
      value: 2
    });

    //expect(response.body).toHaveProperty('ong_id');
    //expect(response.body.id).toHaveLength(8);
    console.log(response.body);
  });
});