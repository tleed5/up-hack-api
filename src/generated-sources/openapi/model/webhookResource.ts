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
import { AccountResourceLinks } from './accountResourceLinks';
import { WebhookResourceAttributes } from './webhookResourceAttributes';
import { WebhookResourceRelationships } from './webhookResourceRelationships';

/**
* Provides information about a webhook. 
*/
export class WebhookResource {
    /**
    * The unique identifier for this webhook. 
    */
    'id': string;
    /**
    * The type of this resource: `webhooks`
    */
    'type': string;
    'attributes': WebhookResourceAttributes;
    'links'?: AccountResourceLinks;
    'relationships': WebhookResourceRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "WebhookResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "AccountResourceLinks"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "WebhookResourceRelationships"
        }    ];

    static getAttributeTypeMap() {
        return WebhookResource.attributeTypeMap;
    }
}
