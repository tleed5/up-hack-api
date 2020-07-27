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
import { ListAccountsResponseLinks } from './listAccountsResponseLinks';
import { WebhookResource } from './webhookResource';

/**
* Successful response to get all webhooks. This returns a paginated list of webhooks, which can be scrolled by following the `prev` and `next` links if present. 
*/
export class ListWebhooksResponse {
    /**
    * The list of webhooks returned in this response. 
    */
    'data': Array<WebhookResource>;
    'links': ListAccountsResponseLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<WebhookResource>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ListAccountsResponseLinks"
        }    ];

    static getAttributeTypeMap() {
        return ListWebhooksResponse.attributeTypeMap;
    }
}

