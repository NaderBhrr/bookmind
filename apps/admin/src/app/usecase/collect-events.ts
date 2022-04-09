import { Book } from "@bookmind/entities";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { adminRepository } from "../repositories/admin.repository";

export const collectEvents = (fastify: FastifyInstance) => async (request: any, reply: FastifyReply) => {

    const { actor, object} = request.body.data;

    const { db } = fastify;
    const { createBook } = adminRepository(db.datasourceInstance);

    const bookModel: Book = {
        id: object.id,
        bookTitle: object.title,
        currentOwner: actor.id,
        offeredAt: object.publishedAt,
        exchangedAt: object.publishedAt
    }

    await createBook(bookModel);

    reply.status(200).send( {
        "type": "TEST",
        "status": "SUCCEEDED",
        "data": {
          "challenge": request.body.data.challenge
        }
      })
}