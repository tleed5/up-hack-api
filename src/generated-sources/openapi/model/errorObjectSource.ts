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
* If applicable, location in the request that this error relates to. This may be a parameter in the query string, or a an attribute in the request body. 
*/
export class ErrorObjectSource {
    /**
    * If this error relates to a query parameter, the name of the parameter. 
    */
    'parameter'?: string;
    /**
    * If this error relates to an attribute in the request body, a rfc-6901 JSON pointer to the attribute. 
    */
    'pointer'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "parameter",
            "baseName": "parameter",
            "type": "string"
        },
        {
            "name": "pointer",
            "baseName": "pointer",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ErrorObjectSource.attributeTypeMap;
    }
}

