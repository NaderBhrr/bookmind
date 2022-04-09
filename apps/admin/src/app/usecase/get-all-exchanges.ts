import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { tribeFacade } from "@bookmind/tribe-facade"
import { adminRepository } from "../repositories/admin.repository";


export const getAllExchanges = (fastify: FastifyInstance) => async (request: any, reply: FastifyReply) => {

    const {limit} = request.query;
    
    const { getTribePosts} = tribeFacade();

    const exchanges = await getTribePosts(limit);
    
    reply.send({ data: exchanges });
}