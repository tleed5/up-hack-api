export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './utilityEndpointsApi';
import { UtilityEndpointsApi } from './utilityEndpointsApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AccountsApi, TransactionsApi, UtilityEndpointsApi, WebhooksApi];
