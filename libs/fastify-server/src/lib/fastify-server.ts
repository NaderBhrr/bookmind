import Fastify, { FastifyInstance, FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";

export const fastifyServer = async function (...plugins: any): Promise<FastifyInstance> {

  const fastifyInstance: FastifyInstance = Fastify({});

  fastifyInstance.register(import("fastify-cors"));

for await (const plugin of plugins) {
  fastifyInstance.register(fastifyPlugin(plugin));
}

  return fastifyInstance;
}
