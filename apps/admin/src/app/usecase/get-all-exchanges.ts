import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { tribeFacade } from "@bookmind/tribe-facade"
import { adminRepository } from "../repositories/admin.repository";


export const getAllExchanges = (fastify: FastifyInstance) => async (request: FastifyRequest, reply: FastifyReply) => {

    const { getTribePosts} = tribeFacade();

    const exchanges = await getTribePosts(300);
    
    reply.send({ data: exchanges });
}