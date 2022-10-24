import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
