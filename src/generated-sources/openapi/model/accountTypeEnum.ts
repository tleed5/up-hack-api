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
* Specifies the type of bank account. Currently returned values are `SAVER` and `TRANSACTIONAL`. 
*/
export enum AccountTypeEnum {
    SAVER = <any> 'SAVER',
    TRANSACTIONAL = <any> 'TRANSACTIONAL'
}
