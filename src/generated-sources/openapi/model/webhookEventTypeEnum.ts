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

/**
* Specifies the type of a webhook event. This can be used to determine what action to take in response to the event, such as which relationships to expect. 
*/
export enum WebhookEventTypeEnum {
    TRANSACTIONCREATED = <any> 'TRANSACTION_CREATED',
    TRANSACTIONSETTLED = <any> 'TRANSACTION_SETTLED',
    TRANSACTIONDELETED = <any> 'TRANSACTION_DELETED',
    PING = <any> 'PING'
}
