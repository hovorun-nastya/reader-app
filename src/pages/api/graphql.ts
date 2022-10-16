import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import { createContext } from '../../graphql/context';
import Cors from 'micro-cors';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function handler(request, responce) {
  if (request.method === 'OPTIONS') {
    responce.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(request, responce);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

