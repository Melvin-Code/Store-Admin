import { gql } from "graphql-tag";
const typeDefs = gql `
  type Store {
    id: ID!
    title: String
  }

  type Query {
    stores: [Store]
    store(id: ID!): Store
  }
`;
export default typeDefs;
