import { fastifyServer } from './fastify-server';
import Fastify , {FastifyInstance} from "fastify";

describe('fastifyServer', () => {
  it('should return the fastify instance', async () => {
    // Arrange

    // Assert
    expect(await fastifyServer()).toBeDefined();
    
  });
});
