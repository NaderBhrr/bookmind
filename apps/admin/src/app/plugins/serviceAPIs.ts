import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from "fastify";

/**
 * The plugin function that handles all the routing of the Admin service
 * @param fastify 
 * @param options 
 * @param done 
 * @async
 * 
 */
export const createServiceAPIs = async function (fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

    fastify.get("/test", async (request, reply) => {


        reply.send({status: "working"})
    })

    done();
} 