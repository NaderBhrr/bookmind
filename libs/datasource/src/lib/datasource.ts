import { FastifyInstance, FastifyPluginOptions } from "fastify";
import "reflect-metadata";
import {DataSource} from "typeorm";
export const datasource = async function (fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

  const datasourceInstance = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "bookmind"
  })

  try {
      await datasourceInstance.initialize()
      console.log("Data Source has been initialized!");
      fastify.decorate("db", {datasourceInstance})
  } catch (error) {
    console.error("Datasource connection Error", error)
  }
  
  done();
}
