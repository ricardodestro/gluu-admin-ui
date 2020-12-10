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
 * The AppConfigurationCorsConfigurationFilters model module.
 * @module model/AppConfigurationCorsConfigurationFilters
 * @version 1.0.0
 */
class AppConfigurationCorsConfigurationFilters {
    /**
     * Constructs a new <code>AppConfigurationCorsConfigurationFilters</code>.
     * @alias module:model/AppConfigurationCorsConfigurationFilters
     */
    constructor() { 
        
        AppConfigurationCorsConfigurationFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppConfigurationCorsConfigurationFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppConfigurationCorsConfigurationFilters} obj Optional instance to populate.
     * @return {module:model/AppConfigurationCorsConfigurationFilters} The populated <code>AppConfigurationCorsConfigurationFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppConfigurationCorsConfigurationFilters();

            if (data.hasOwnProperty('filterName')) {
                obj['filterName'] = ApiClient.convertToType(data['filterName'], 'String');
            }
            if (data.hasOwnProperty('corsEnabled')) {
                obj['corsEnabled'] = ApiClient.convertToType(data['corsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('corsAllowedOrigins')) {
                obj['corsAllowedOrigins'] = ApiClient.convertToType(data['corsAllowedOrigins'], 'String');
            }
            if (data.hasOwnProperty('corsAllowedMethods')) {
                obj['corsAllowedMethods'] = ApiClient.convertToType(data['corsAllowedMethods'], 'String');
            }
            if (data.hasOwnProperty('corsAllowedHeaders')) {
                obj['corsAllowedHeaders'] = ApiClient.convertToType(data['corsAllowedHeaders'], 'String');
            }
            if (data.hasOwnProperty('corsExposedHeaders')) {
                obj['corsExposedHeaders'] = ApiClient.convertToType(data['corsExposedHeaders'], 'String');
            }
            if (data.hasOwnProperty('corsSupportCredentials')) {
                obj['corsSupportCredentials'] = ApiClient.convertToType(data['corsSupportCredentials'], 'Boolean');
            }
            if (data.hasOwnProperty('corsLoggingEnabled')) {
                obj['corsLoggingEnabled'] = ApiClient.convertToType(data['corsLoggingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('corsPreflightMaxAge')) {
                obj['corsPreflightMaxAge'] = ApiClient.convertToType(data['corsPreflightMaxAge'], 'Number');
            }
            if (data.hasOwnProperty('corsRequestDecorate')) {
                obj['corsRequestDecorate'] = ApiClient.convertToType(data['corsRequestDecorate'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} filterName
 */
AppConfigurationCorsConfigurationFilters.prototype['filterName'] = undefined;

/**
 * @member {Boolean} corsEnabled
 * @default true
 */
AppConfigurationCorsConfigurationFilters.prototype['corsEnabled'] = true;

/**
 * @member {String} corsAllowedOrigins
 * @default '\*'
 */
AppConfigurationCorsConfigurationFilters.prototype['corsAllowedOrigins'] = '\*';

/**
 * @member {String} corsAllowedMethods
 * @default 'GET, POST, HEAD, OPTIONS'
 */
AppConfigurationCorsConfigurationFilters.prototype['corsAllowedMethods'] = 'GET, POST, HEAD, OPTIONS';

/**
 * @member {String} corsAllowedHeaders
 * @default 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
 */
AppConfigurationCorsConfigurationFilters.prototype['corsAllowedHeaders'] = 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers';

/**
 * @member {String} corsExposedHeaders
 */
AppConfigurationCorsConfigurationFilters.prototype['corsExposedHeaders'] = undefined;

/**
 * @member {Boolean} corsSupportCredentials
 * @default true
 */
AppConfigurationCorsConfigurationFilters.prototype['corsSupportCredentials'] = true;

/**
 * @member {Boolean} corsLoggingEnabled
 * @default false
 */
AppConfigurationCorsConfigurationFilters.prototype['corsLoggingEnabled'] = false;

/**
 * @member {Number} corsPreflightMaxAge
 * @default 1800
 */
AppConfigurationCorsConfigurationFilters.prototype['corsPreflightMaxAge'] = 1800;

/**
 * @member {Boolean} corsRequestDecorate
 * @default true
 */
AppConfigurationCorsConfigurationFilters.prototype['corsRequestDecorate'] = true;






export default AppConfigurationCorsConfigurationFilters;
