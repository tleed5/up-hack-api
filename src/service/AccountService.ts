import { UpBankRepository } from "../repository/UpBankRepository";
import { Account } from '../models/Account';
import { Transaction } from '../models/Transaction';

export class AccountService {
    private upBankRepo: UpBankRepository 

    constructor(){
        this.upBankRepo = new UpBankRepository();
    }

    public async syncBankAccounts(){
        const upAccounts = await this.upBankRepo.getAccounts();
        const accountEntities: Array<Account> = upAccounts.map(it => {
            const account = new Account();
            account.id = it.id;
            account.bsb = '1234';
            account.accountNumber = '1234';
            account.accountName = it.attributes.displayName;
            account.balance = it.attributes.balance.valueInBaseUnits;
            account.accountType = it.attributes.accountType.toString();
            return account;
        });
        for(let i = 0; i< accountEntities.length; i++){
            accountEntities[i].transactions = await this.getTransactionsAndMapForAccount(accountEntities[i]);
        }
        await Account.save(accountEntities);
    }

    private async getTransactionsAndMapForAccount(account: Account): Promise<Array<Transaction>>{
        const upTransactions = await this.upBankRepo.getTransactionsForAccount(account.id);
        const entities = upTransactions.map(it => {
            const transaction = new Transaction();
            transaction.parentAccount = account;
            transaction.id = it.id;
            transaction.amount = it.attributes.amount.valueInBaseUnits;
            transaction.description = it.attributes.description;
            transaction.status = it.attributes.status.toString();
            return transaction;
        });
        return entities;
    }
}