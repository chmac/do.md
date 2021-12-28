import "reflect-metadata";

import { createServer } from "graphql-yoga";

import { getSchema } from "./schema";

const start = async () => {
  const schema = await getSchema();

  const server = createServer({ schema });

  await server.start();

  console.log("Started #HOxxHn");
};

start();
