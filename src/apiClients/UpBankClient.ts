import { AccountsApi, TransactionsApi } from '../generated-sources/openapi/api'

export class UpBankClient {
    private baseUrl: string = 'https://api.up.com.au/api/v1';
    private accessToken: string = 'insert-token-here'
    public accountsApi: AccountsApi;
    public transactionApi: TransactionsApi;

    constructor(){
        this.accountsApi = new AccountsApi(this.baseUrl);
        this.accountsApi.accessToken = this.accessToken;
        this.transactionApi = new TransactionsApi(this.baseUrl);
        this.transactionApi.accessToken = this.accessToken;
    }
}   