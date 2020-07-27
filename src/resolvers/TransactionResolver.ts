import { Resolver, Query, Arg } from "type-graphql";
import { Transaction } from "../models/Transaction";

@Resolver()
export class TransactionResolver {
    @Query(() => [Transaction])
    transactions() {
        return Transaction.find({relations: ['parentAccount']});
    }

    @Query(() => Transaction)
    transaction(@Arg("id") id: string) {
        return Transaction.findOne({ where: { id } });
    }
}