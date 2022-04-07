import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {tribeFacade} from "@bookmind/tribe-facade"

export const getAllPosts = (fastify: FastifyInstance) => async (request: FastifyRequest, reply: FastifyReply) => {

    const {client, getTribeAccessToken} = tribeFacade();

        const token = await getTribeAccessToken(client);

        client.setToken(token);

        const members = await client.members.list({limit: 400});
        const posts = await client.posts.list({limit: 10000});

        reply.send({posts})
}