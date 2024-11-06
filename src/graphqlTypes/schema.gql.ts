const typeDefs = `#graphql
type Store  {
    id: ID!,
    title: String
}

type Query {
    store: [Store]
}
`;

export default typeDefs;
