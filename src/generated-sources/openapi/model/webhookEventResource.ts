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
import { WebhookEventResourceAttributes } from './webhookEventResourceAttributes';
import { WebhookEventResourceRelationships } from './webhookEventResourceRelationships';

/**
* Provides the event data used in asynchronous webhook event callbacks to subscribed endpoints. Webhooks events have defined `eventType`s and may optionally relate to other resources within the Up API. 
*/
export class WebhookEventResource {
    /**
    * The unique identifier for this event. This will remain constant across delivery retries. 
    */
    'id': string;
    /**
    * The type of this resource: `webhook-events`
    */
    'type': string;
    'attributes': WebhookEventResourceAttributes;
    'links'?: AccountResourceLinks;
    'relationships': WebhookEventResourceRelationships;

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
            "type": "WebhookEventResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "AccountResourceLinks"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "WebhookEventResourceRelationships"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEventResource.attributeTypeMap;
    }
}
