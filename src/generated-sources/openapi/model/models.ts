export * from './accountResource';
export * from './accountResourceAttributes';
export * from './accountResourceLinks';
export * from './accountResourceRelationships';
export * from './accountResourceRelationshipsTransactions';
export * from './accountResourceRelationshipsTransactionsLinks';
export * from './accountTypeEnum';
export * from './cashbackObject';
export * from './createWebhookRequest';
export * from './createWebhookResponse';
export * from './errorObject';
export * from './errorObjectSource';
export * from './errorResponse';
export * from './getAccountResponse';
export * from './getTransactionResponse';
export * from './getWebhookResponse';
export * from './holdInfoObject';
export * from './listAccountsResponse';
export * from './listAccountsResponseLinks';
export * from './listTransactionsResponse';
export * from './listWebhookDeliveryLogsResponse';
export * from './listWebhooksResponse';
export * from './moneyObject';
export * from './pingResponse';
export * from './pingResponseMeta';
export * from './roundUpObject';
export * from './transactionResource';
export * from './transactionResourceAttributes';
export * from './transactionResourceRelationships';
export * from './transactionResourceRelationshipsAccount';
export * from './transactionResourceRelationshipsAccountData';
export * from './transactionStatusEnum';
export * from './webhookDeliveryLogResource';
export * from './webhookDeliveryLogResourceAttributes';
export * from './webhookDeliveryLogResourceAttributesRequest';
export * from './webhookDeliveryLogResourceAttributesResponse';
export * from './webhookDeliveryLogResourceRelationships';
export * from './webhookDeliveryLogResourceRelationshipsWebhookEvent';
export * from './webhookDeliveryStatusEnum';
export * from './webhookEventCallback';
export * from './webhookEventResource';
export * from './webhookEventResourceAttributes';
export * from './webhookEventResourceRelationships';
export * from './webhookEventTypeEnum';
export * from './webhookInputResource';
export * from './webhookInputResourceAttributes';
export * from './webhookResource';
export * from './webhookResourceAttributes';
export * from './webhookResourceRelationships';

import localVarRequest = require('request');

import { AccountResource } from './accountResource';
import { AccountResourceAttributes } from './accountResourceAttributes';
import { AccountResourceLinks } from './accountResourceLinks';
import { AccountResourceRelationships } from './accountResourceRelationships';
import { AccountResourceRelationshipsTransactions } from './accountResourceRelationshipsTransactions';
import { AccountResourceRelationshipsTransactionsLinks } from './accountResourceRelationshipsTransactionsLinks';
import { AccountTypeEnum } from './accountTypeEnum';
import { CashbackObject } from './cashbackObject';
import { CreateWebhookRequest } from './createWebhookRequest';
import { CreateWebhookResponse } from './createWebhookResponse';
import { ErrorObject } from './errorObject';
import { ErrorObjectSource } from './errorObjectSource';
import { ErrorResponse } from './errorResponse';
import { GetAccountResponse } from './getAccountResponse';
import { GetTransactionResponse } from './getTransactionResponse';
import { GetWebhookResponse } from './getWebhookResponse';
import { HoldInfoObject } from './holdInfoObject';
import { ListAccountsResponse } from './listAccountsResponse';
import { ListAccountsResponseLinks } from './listAccountsResponseLinks';
import { ListTransactionsResponse } from './listTransactionsResponse';
import { ListWebhookDeliveryLogsResponse } from './listWebhookDeliveryLogsResponse';
import { ListWebhooksResponse } from './listWebhooksResponse';
import { MoneyObject } from './moneyObject';
import { PingResponse } from './pingResponse';
import { PingResponseMeta } from './pingResponseMeta';
import { RoundUpObject } from './roundUpObject';
import { TransactionResource } from './transactionResource';
import { TransactionResourceAttributes } from './transactionResourceAttributes';
import { TransactionResourceRelationships } from './transactionResourceRelationships';
import { TransactionResourceRelationshipsAccount } from './transactionResourceRelationshipsAccount';
import { TransactionResourceRelationshipsAccountData } from './transactionResourceRelationshipsAccountData';
import { TransactionStatusEnum } from './transactionStatusEnum';
import { WebhookDeliveryLogResource } from './webhookDeliveryLogResource';
import { WebhookDeliveryLogResourceAttributes } from './webhookDeliveryLogResourceAttributes';
import { WebhookDeliveryLogResourceAttributesRequest } from './webhookDeliveryLogResourceAttributesRequest';
import { WebhookDeliveryLogResourceAttributesResponse } from './webhookDeliveryLogResourceAttributesResponse';
import { WebhookDeliveryLogResourceRelationships } from './webhookDeliveryLogResourceRelationships';
import { WebhookDeliveryLogResourceRelationshipsWebhookEvent } from './webhookDeliveryLogResourceRelationshipsWebhookEvent';
import { WebhookDeliveryStatusEnum } from './webhookDeliveryStatusEnum';
import { WebhookEventCallback } from './webhookEventCallback';
import { WebhookEventResource } from './webhookEventResource';
import { WebhookEventResourceAttributes } from './webhookEventResourceAttributes';
import { WebhookEventResourceRelationships } from './webhookEventResourceRelationships';
import { WebhookEventTypeEnum } from './webhookEventTypeEnum';
import { WebhookInputResource } from './webhookInputResource';
import { WebhookInputResourceAttributes } from './webhookInputResourceAttributes';
import { WebhookResource } from './webhookResource';
import { WebhookResourceAttributes } from './webhookResourceAttributes';
import { WebhookResourceRelationships } from './webhookResourceRelationships';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountTypeEnum": AccountTypeEnum,
        "TransactionStatusEnum": TransactionStatusEnum,
        "WebhookDeliveryStatusEnum": WebhookDeliveryStatusEnum,
        "WebhookEventTypeEnum": WebhookEventTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountResource": AccountResource,
    "AccountResourceAttributes": AccountResourceAttributes,
    "AccountResourceLinks": AccountResourceLinks,
    "AccountResourceRelationships": AccountResourceRelationships,
    "AccountResourceRelationshipsTransactions": AccountResourceRelationshipsTransactions,
    "AccountResourceRelationshipsTransactionsLinks": AccountResourceRelationshipsTransactionsLinks,
    "CashbackObject": CashbackObject,
    "CreateWebhookRequest": CreateWebhookRequest,
    "CreateWebhookResponse": CreateWebhookResponse,
    "ErrorObject": ErrorObject,
    "ErrorObjectSource": ErrorObjectSource,
    "ErrorResponse": ErrorResponse,
    "GetAccountResponse": GetAccountResponse,
    "GetTransactionResponse": GetTransactionResponse,
    "GetWebhookResponse": GetWebhookResponse,
    "HoldInfoObject": HoldInfoObject,
    "ListAccountsResponse": ListAccountsResponse,
    "ListAccountsResponseLinks": ListAccountsResponseLinks,
    "ListTransactionsResponse": ListTransactionsResponse,
    "ListWebhookDeliveryLogsResponse": ListWebhookDeliveryLogsResponse,
    "ListWebhooksResponse": ListWebhooksResponse,
    "MoneyObject": MoneyObject,
    "PingResponse": PingResponse,
    "PingResponseMeta": PingResponseMeta,
    "RoundUpObject": RoundUpObject,
    "TransactionResource": TransactionResource,
    "TransactionResourceAttributes": TransactionResourceAttributes,
    "TransactionResourceRelationships": TransactionResourceRelationships,
    "TransactionResourceRelationshipsAccount": TransactionResourceRelationshipsAccount,
    "TransactionResourceRelationshipsAccountData": TransactionResourceRelationshipsAccountData,
    "WebhookDeliveryLogResource": WebhookDeliveryLogResource,
    "WebhookDeliveryLogResourceAttributes": WebhookDeliveryLogResourceAttributes,
    "WebhookDeliveryLogResourceAttributesRequest": WebhookDeliveryLogResourceAttributesRequest,
    "WebhookDeliveryLogResourceAttributesResponse": WebhookDeliveryLogResourceAttributesResponse,
    "WebhookDeliveryLogResourceRelationships": WebhookDeliveryLogResourceRelationships,
    "WebhookDeliveryLogResourceRelationshipsWebhookEvent": WebhookDeliveryLogResourceRelationshipsWebhookEvent,
    "WebhookEventCallback": WebhookEventCallback,
    "WebhookEventResource": WebhookEventResource,
    "WebhookEventResourceAttributes": WebhookEventResourceAttributes,
    "WebhookEventResourceRelationships": WebhookEventResourceRelationships,
    "WebhookInputResource": WebhookInputResource,
    "WebhookInputResourceAttributes": WebhookInputResourceAttributes,
    "WebhookResource": WebhookResource,
    "WebhookResourceAttributes": WebhookResourceAttributes,
    "WebhookResourceRelationships": WebhookResourceRelationships,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
