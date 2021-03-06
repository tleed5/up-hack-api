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
import { AccountTypeEnum } from './accountTypeEnum';
import { MoneyObject } from './moneyObject';

export class AccountResourceAttributes {
    /**
    * The name associated with the account in the Up application. 
    */
    'displayName': string;
    /**
    * The bank account type of this account. 
    */
    'accountType': AccountTypeEnum;
    /**
    * The available balance of the account, taking into account any amounts that are currently on hold. 
    */
    'balance': MoneyObject;
    /**
    * The date-time at which this account was first opened. 
    */
    'createdAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "AccountTypeEnum"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "MoneyObject"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return AccountResourceAttributes.attributeTypeMap;
    }
}

