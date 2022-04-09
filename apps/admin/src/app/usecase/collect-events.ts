import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { adminRepository } from "../repositories/admin.repository";

export const collectEvents = (fastify: FastifyInstance) => async (request: any, reply: FastifyReply) => {

    const { actor, object, id} = request.body.data;

    const { db } = fastify;
    const { createBook } = adminRepository(db.datasourceInstance);

    const bookModel = {
        id: object.id,
        bookTitle: object.title,
        currentOwner: actor.id,
        // initialOwner: actor.id,
        offeredAt: object.publishedAt,
        exchangedAt: object.publishedAt
    }

    console.log("BM >>", bookModel)


    // const data = extractInformation(request.body)
    await createBook(bookModel);

    reply.status(200).send({message: "Event collected"})
}