import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Transaction } from "./Transaction";

@Entity()
@ObjectType()
export class Account extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;
  
  @Field(() => String)
  @Column()
  bsb: string;

  @Field(() => String)
  @Column()
  accountNumber: string;

  @Field(() => String)
  @Column()
  accountName: string;

  @Field(() => Number)
  @Column()
  balance: number;
  
  @Field(() => String)
  @Column()
  accountType: string;

  @Field(() => [Transaction])
  @OneToMany(() => Transaction, transaction => transaction.parentAccount, { cascade: true })
  transactions: Array<Transaction>;
}