import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Account } from './Account';
@Entity()
@ObjectType()
export class Transaction extends BaseEntity {
    @Field(() => ID)
    @PrimaryColumn()
    id: string;

    @Field(() => Account)
    @ManyToOne(() => Account, account => account.transactions)
    parentAccount: Account;

    @Field(() => String)
    @Column()
    status: string;
    @Field(() => String)
    @Column()
    description: string;

    @Field(() => Number)
    @Column()
    amount: number;
}