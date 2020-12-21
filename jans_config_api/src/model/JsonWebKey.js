/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JsonWebKey model module.
 * @module model/JsonWebKey
 * @version 1.0.0
 */
class JsonWebKey {
    /**
     * Constructs a new <code>JsonWebKey</code>.
     * @alias module:model/JsonWebKey
     * @param kid {String} 
     * @param kty {String} 
     * @param use {String} 
     * @param alg {String} 
     * @param exp {Number} 
     * @param x5c {Array.<String>} 
     */
    constructor(kid, kty, use, alg, exp, x5c) { 
        
        JsonWebKey.initialize(this, kid, kty, use, alg, exp, x5c);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kid, kty, use, alg, exp, x5c) { 
        obj['kid'] = kid;
        obj['kty'] = kty;
        obj['use'] = use;
        obj['alg'] = alg;
        obj['exp'] = exp;
        obj['x5c'] = x5c;
    }

    /**
     * Constructs a <code>JsonWebKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonWebKey} obj Optional instance to populate.
     * @return {module:model/JsonWebKey} The populated <code>JsonWebKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonWebKey();

            if (data.hasOwnProperty('kid')) {
                obj['kid'] = ApiClient.convertToType(data['kid'], 'String');
            }
            if (data.hasOwnProperty('kty')) {
                obj['kty'] = ApiClient.convertToType(data['kty'], 'String');
            }
            if (data.hasOwnProperty('use')) {
                obj['use'] = ApiClient.convertToType(data['use'], 'String');
            }
            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('crv')) {
                obj['crv'] = ApiClient.convertToType(data['crv'], 'String');
            }
            if (data.hasOwnProperty('exp')) {
                obj['exp'] = ApiClient.convertToType(data['exp'], 'Number');
            }
            if (data.hasOwnProperty('x5c')) {
                obj['x5c'] = ApiClient.convertToType(data['x5c'], ['String']);
            }
            if (data.hasOwnProperty('n')) {
                obj['n'] = ApiClient.convertToType(data['n'], 'String');
            }
            if (data.hasOwnProperty('e')) {
                obj['e'] = ApiClient.convertToType(data['e'], 'String');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'String');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} kid
 */
JsonWebKey.prototype['kid'] = undefined;

/**
 * @member {String} kty
 */
JsonWebKey.prototype['kty'] = undefined;

/**
 * @member {String} use
 */
JsonWebKey.prototype['use'] = undefined;

/**
 * @member {String} alg
 */
JsonWebKey.prototype['alg'] = undefined;

/**
 * @member {String} crv
 */
JsonWebKey.prototype['crv'] = undefined;

/**
 * @member {Number} exp
 */
JsonWebKey.prototype['exp'] = undefined;

/**
 * @member {Array.<String>} x5c
 */
JsonWebKey.prototype['x5c'] = undefined;

/**
 * @member {String} n
 */
JsonWebKey.prototype['n'] = undefined;

/**
 * @member {String} e
 */
JsonWebKey.prototype['e'] = undefined;

/**
 * @member {String} x
 */
JsonWebKey.prototype['x'] = undefined;

/**
 * @member {String} y
 */
JsonWebKey.prototype['y'] = undefined;






export default JsonWebKey;
