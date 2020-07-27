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
import { WebhookEventTypeEnum } from './webhookEventTypeEnum';

export class WebhookEventResourceAttributes {
    /**
    * The type of this event. This can be used to determine what action to take in response to the event. 
    */
    'eventType': WebhookEventTypeEnum;
    /**
    * The date-time at which this event was generated. 
    */
    'createdAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "WebhookEventTypeEnum"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEventResourceAttributes.attributeTypeMap;
    }
}
