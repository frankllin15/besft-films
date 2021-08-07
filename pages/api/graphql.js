import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../lib/graphql/schemas";
import { resolvers } from "../../lib/graphql/resolvers";
import {  ApolloServerPluginLandingPageGraphQLPlayground  } from 'apollo-server-core'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: false, 
    plugins: process.env.NODE_ENV === "development" ? [ApolloServerPluginLandingPageGraphQLPlayground()] : [],
  });


  export const config = {
    api: {
      bodyParser: false,
      externalResolver: true,
    },
  };
  
  const startServer = apolloServer.start();
  
  export default async function handler(req, res) {
  
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  }
// export default apolloServer.createHandler({ path: "/api/graphql" })