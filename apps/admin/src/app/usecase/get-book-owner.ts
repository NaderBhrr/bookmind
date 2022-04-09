import { tribeFacade } from "@bookmind/tribe-facade";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const getBookOwner = (fastify: FastifyInstance) => async (request: FastifyRequest, reply: FastifyReply) => {

    console.log(request.params)

    const { getTribeMember} = tribeFacade();

    const member = await getTribeMember('')
    

    reply.send({ data: member })
}