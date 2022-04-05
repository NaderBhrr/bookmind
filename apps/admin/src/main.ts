import { fastifyServer, displayServerRunning } from "@bookmind/fastify-server";

const adminServiceServer = async function () {

    const server = fastifyServer();

    try {
        
        const port = process.env.PORT || 4000;

        (await server).ready();
        (await server).listen(port, '0.0.0.0', () => {
            displayServerRunning("ADMIN", port);
        });

    } catch (error) {
        (await server).log.error(error);
        process.exit(1);
    }
}

adminServiceServer();
