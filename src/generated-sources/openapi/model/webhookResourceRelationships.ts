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
import { AccountResourceRelationshipsTransactions } from './accountResourceRelationshipsTransactions';

export class WebhookResourceRelationships {
    'logs': AccountResourceRelationshipsTransactions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logs",
            "baseName": "logs",
            "type": "AccountResourceRelationshipsTransactions"
        }    ];

    static getAttributeTypeMap() {
        return WebhookResourceRelationships.attributeTypeMap;
    }
}

