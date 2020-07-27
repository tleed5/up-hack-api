import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AccountResolver } from "./resolvers/AccountResolver";
import { TransactionResolver } from './resolvers/TransactionResolver';
import { AccountService } from "./service/AccountService";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [AccountResolver, TransactionResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  const accService = new AccountService();
  await accService.syncBankAccounts();
  console.log("Server has started!");
}

main();