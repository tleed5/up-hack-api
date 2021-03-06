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
import { MoneyObject } from './moneyObject';

/**
* Provides information about the amount at which a transaction was in the `HELD` status. 
*/
export class HoldInfoObject {
    /**
    * The amount of this transaction while in the `HELD` status, in Australian dollars. 
    */
    'amount': MoneyObject;
    /**
    * The foreign currency amount of this transaction while in the `HELD` status. This field will be `null` for domestic transactions. The amount was converted to the AUD amount reflected in the `amount` field. 
    */
    'foreignAmount': MoneyObject | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "MoneyObject"
        },
        {
            "name": "foreignAmount",
            "baseName": "foreignAmount",
            "type": "MoneyObject"
        }    ];

    static getAttributeTypeMap() {
        return HoldInfoObject.attributeTypeMap;
    }
}

