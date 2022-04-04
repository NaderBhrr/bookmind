import { fastifyServer } from './fastify-server';

describe('fastifyServer', () => {
  it('should work', () => {
    expect(fastifyServer()).toEqual('fastify-server');
  });
});
