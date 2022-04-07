import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { AdminServiceAPIs } from "../enums/admin-service-api.enum";
import { collectEvents, getAllPosts } from "../usecase";

/**
 * The plugin function that handles all the routing of the Admin service
 * @param fastify 
 * @param options 
 * @param done 
 * @async
 * 
 */
export const createServiceAPIs = async function (fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

    fastify.get(AdminServiceAPIs.GetPosts, getAllPosts(fastify));
    fastify.post(AdminServiceAPIs.CollectEvents, collectEvents(fastify));


    done();
} 