import { tribeFacade } from "@bookmind/tribe-facade";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const getBookOwner = (fastify: FastifyInstance) => async (request: any, reply: FastifyReply) => {

    const {ownerId} = request.params;
    
    const { getTribeMember} = tribeFacade();

    const member = await getTribeMember(ownerId);
    
    reply.send({ data: member })
}