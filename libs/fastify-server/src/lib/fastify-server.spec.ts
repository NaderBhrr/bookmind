import { fastifyServer } from './fastify-server';

describe('fastifyServer', () => {
  it('should work', () => {
    console.log("reachin here")
    expect(fastifyServer()).toEqual('fastify-server');
  });
});
