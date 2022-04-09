import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { REPL_MODE_SLOPPY } from "repl";
import { AdminServiceAPIs } from "../enums/admin-service-api.enum";
import { collectEvents, getAllExchanges, getBookOwner } from "../usecase";

/**
 * The plugin function that handles all the routing of the Admin service
 * @param fastify 
 * @param options 
 * @param done 
 * @async
 * 
 */
export const createServiceAPIs = async function (fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

    fastify.get(AdminServiceAPIs.GetExchanges, getAllExchanges(fastify));
    fastify.get(AdminServiceAPIs.GetOwner, getBookOwner(fastify));
    fastify.post(AdminServiceAPIs.CollectEvents, collectEvents(fastify));


    done();
} 