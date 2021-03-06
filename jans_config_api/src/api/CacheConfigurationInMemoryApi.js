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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import InMemoryConfiguration from '../model/InMemoryConfiguration';
import PatchRequest from '../model/PatchRequest';

/**
* CacheConfigurationInMemory service.
* @module api/CacheConfigurationInMemoryApi
* @version 1.0.0
*/
export default class CacheConfigurationInMemoryApi {

    /**
    * Constructs a new CacheConfigurationInMemoryApi. 
    * @alias module:api/CacheConfigurationInMemoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getConfigCacheInMemory operation.
     * @callback module:api/CacheConfigurationInMemoryApi~getConfigCacheInMemoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InMemoryConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns in-Memory cache configuration.
     * Returns in-Memory cache configuration.
     * @param {module:api/CacheConfigurationInMemoryApi~getConfigCacheInMemoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InMemoryConfiguration}
     */
    getConfigCacheInMemory(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InMemoryConfiguration;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/config/cache/in-memory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchConfigCacheInMemory operation.
     * @callback module:api/CacheConfigurationInMemoryApi~patchConfigCacheInMemoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InMemoryConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially modifies In-Memory cache configuration.
     * Partially modifies In-Memory cache configuration.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/PatchRequest>} opts.patchRequest 
     * @param {module:api/CacheConfigurationInMemoryApi~patchConfigCacheInMemoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InMemoryConfiguration}
     */
    patchConfigCacheInMemory(opts, callback) {
      opts = opts || {};
      let postBody = opts['patchRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json-patch+json'];
      let accepts = ['application/json'];
      let returnType = InMemoryConfiguration;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/config/cache/in-memory', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putConfigCacheInMemory operation.
     * @callback module:api/CacheConfigurationInMemoryApi~putConfigCacheInMemoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InMemoryConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates in-Memory cache configuration.
     * Updates in-Memory cache configuration.
     * @param {Object} opts Optional parameters
     * @param {module:model/InMemoryConfiguration} opts.inMemoryConfiguration 
     * @param {module:api/CacheConfigurationInMemoryApi~putConfigCacheInMemoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InMemoryConfiguration}
     */
    putConfigCacheInMemory(opts, callback) {
      opts = opts || {};
      let postBody = opts['inMemoryConfiguration'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InMemoryConfiguration;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/config/cache/in-memory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
