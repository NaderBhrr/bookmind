import { FastifyInstance, FastifyPluginOptions } from "fastify";
import "reflect-metadata";
import {DataSource} from "typeorm";
import {Member, Book} from "@bookmind/entities"

export const datasource = async function (fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

  const datasourceInstance = new DataSource({
    type: "postgres",
    host: process.env.DS_HOST ?? "localhost",
    port: 5432,
    username: process.env.DS_USERNAME,
    password: process.env.DS_PASSWORD,
    database: process.env.DS_DATABASE,
    synchronize: true,
    entities: [Member, Book]
  });

  try {
      await datasourceInstance.initialize()
      console.log("Data Source has been initialized!");
      
      fastify.decorate("db", {datasourceInstance})
  } catch (error) {
    console.error("Datasource connection Error", error);
  }
  
  done();
}
