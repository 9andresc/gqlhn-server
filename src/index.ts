import { resolve } from 'path';

import { formatError } from 'apollo-errors';
import dotenv from 'dotenv';
import { GraphQLServer, Options } from 'graphql-yoga';

import { prisma } from './generated/prisma-client';
import resolvers from './resolvers';

dotenv.config({ path: resolve(__dirname, '../.env') });

const server = new GraphQLServer({
  context: request => ({
    prisma,
    ...request
  }),
  resolvers,
  typeDefs: './src/schema.graphql'
});

const options: Options = {
  formatError
};

server.start(options, () =>
  console.log('Server is running on http://localhost:4000')
);
