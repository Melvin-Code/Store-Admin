import { gql } from "graphql-tag";
const typeDefs = gql `
  type Store {
    id: ID!
    title: String
  }

  type Query {
    store: [Store]
  }
`;
export default typeDefs;
