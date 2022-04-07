import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { tribeFacade } from "@bookmind/tribe-facade"

export const collectEvents = (fastify: FastifyInstance) => async (request: any, reply: FastifyReply) => {

    console.log(request.body)
    const {ownderId, name } = (request.body);

    console.log(ownderId, name)

    // reply.send({
    //     "type": "TEST",
    //     "status": "SUCCEEDED",
    //     "data": {
    //         "challenge": request.body.data.challenge
    //     }
    // })
}