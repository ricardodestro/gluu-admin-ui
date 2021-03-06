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
 * The NativePersistenceConfiguration model module.
 * @module model/NativePersistenceConfiguration
 * @version 1.0.0
 */
class NativePersistenceConfiguration {
    /**
     * Constructs a new <code>NativePersistenceConfiguration</code>.
     * Cache configuration.
     * @alias module:model/NativePersistenceConfiguration
     */
    constructor() { 
        
        NativePersistenceConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NativePersistenceConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NativePersistenceConfiguration} obj Optional instance to populate.
     * @return {module:model/NativePersistenceConfiguration} The populated <code>NativePersistenceConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NativePersistenceConfiguration();

            if (data.hasOwnProperty('defaultPutExpiration')) {
                obj['defaultPutExpiration'] = ApiClient.convertToType(data['defaultPutExpiration'], 'Number');
            }
            if (data.hasOwnProperty('defaultCleanupBatchSize')) {
                obj['defaultCleanupBatchSize'] = ApiClient.convertToType(data['defaultCleanupBatchSize'], 'Number');
            }
            if (data.hasOwnProperty('deleteExpiredOnGetRequest')) {
                obj['deleteExpiredOnGetRequest'] = ApiClient.convertToType(data['deleteExpiredOnGetRequest'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * defaultPutExpiration timeout value.
 * @member {Number} defaultPutExpiration
 */
NativePersistenceConfiguration.prototype['defaultPutExpiration'] = undefined;

/**
 * defaultCleanupBatchSize page size.
 * @member {Number} defaultCleanupBatchSize
 */
NativePersistenceConfiguration.prototype['defaultCleanupBatchSize'] = undefined;

/**
 * @member {Boolean} deleteExpiredOnGetRequest
 */
NativePersistenceConfiguration.prototype['deleteExpiredOnGetRequest'] = undefined;






export default NativePersistenceConfiguration;

