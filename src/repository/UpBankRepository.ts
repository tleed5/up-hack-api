import { UpBankClient } from "../apiClients/UpBankClient";
import { AccountResource, TransactionResource } from "../generated-sources/openapi/api";

export class UpBankRepository {
    private upBankClient: UpBankClient;
    constructor(){
        this.upBankClient = new UpBankClient();
    }

    public async getAccounts(): Promise<Array<AccountResource>>{
        try{
            const { body } = await this.upBankClient.accountsApi.accountsGet();
            return body.data;
        }catch(ex){
            throw new Error('Something went wrong getting accounts');
        }
    }

    public async getTransactionsForAccount(providerId: string): Promise<Array<TransactionResource>>{
        try{
            const { body } = await this.upBankClient.transactionApi.accountsAccountIdTransactionsGet(providerId);
            return body.data;
        }catch(ex){
            throw new Error('Something went wrong getting accounts');
        }
    }
}