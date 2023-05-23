import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPH_CONTENT,
  cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPH_CONTENT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});
