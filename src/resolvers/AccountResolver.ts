import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Account } from "../models/Account";

@Resolver()
export class AccountResolver {
    @Query(() => [Account])
    accounts() {
        return Account.find({relations: ['transactions']});
    }

    @Query(() => Account)
    account(@Arg("id") id: string) {
        return Account.findOne({ where: { id } });
    }
}