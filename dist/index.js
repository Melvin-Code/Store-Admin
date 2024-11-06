import { Sequelize } from "sequelize";
import { stores } from "./db.js";
// server setup
const resolvers = {
    Query: {
        stores() {
            return stores;
        },
        store(_, args) {
            return stores.find((store) => store.id === args.id);
        },
    },
};
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });
// const sequelize = new Sequelize("stores", "postgres", "Enmanuel1", {
//   host: "localhost",
//   dialect: "postgres",
// });
const sequelize = new Sequelize("postgres://postgres:Enmanuel1@localhost:5432/stores");
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
}
catch (error) {
    console.error("Unable to connect to the database:", error);
}
