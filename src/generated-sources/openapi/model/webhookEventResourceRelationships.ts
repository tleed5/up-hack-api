/**
 * Up API
 * The Up API gives you programmatic access to your balances and transaction data. You can request past transactions or set up webhooks to receive real-time events when new transactions hit your account. It’s new, it’s exciting and it’s just the beginning. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { TransactionResourceRelationshipsAccount } from './transactionResourceRelationshipsAccount';

export class WebhookEventResourceRelationships {
    'webhook': TransactionResourceRelationshipsAccount;
    'transaction'?: TransactionResourceRelationshipsAccount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "TransactionResourceRelationshipsAccount"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "TransactionResourceRelationshipsAccount"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEventResourceRelationships.attributeTypeMap;
    }
}

