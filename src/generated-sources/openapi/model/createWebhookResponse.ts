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
import { WebhookResource } from './webhookResource';

/**
* Successful response after creating a webhook. 
*/
export class CreateWebhookResponse {
    /**
    * The webhook that was created. 
    */
    'data': WebhookResource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "WebhookResource"
        }    ];

    static getAttributeTypeMap() {
        return CreateWebhookResponse.attributeTypeMap;
    }
}
