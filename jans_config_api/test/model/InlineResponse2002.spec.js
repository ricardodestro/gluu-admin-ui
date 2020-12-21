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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.InlineResponse2002();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instane = new JansConfigApi.InlineResponse2002();
      //expect(instance).to.be.a(JansConfigApi.InlineResponse2002);
    });

    it('should have the property cacheProviderType (base name: "cacheProviderType")', function() {
      // uncomment below and update the code to test the property cacheProviderType
      //var instane = new JansConfigApi.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property memcachedConfiguration (base name: "memcachedConfiguration")', function() {
      // uncomment below and update the code to test the property memcachedConfiguration
      //var instane = new JansConfigApi.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property redisConfiguration (base name: "redisConfiguration")', function() {
      // uncomment below and update the code to test the property redisConfiguration
      //var instane = new JansConfigApi.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property inMemoryConfiguration (base name: "inMemoryConfiguration")', function() {
      // uncomment below and update the code to test the property inMemoryConfiguration
      //var instane = new JansConfigApi.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property nativePersistenceConfiguration (base name: "nativePersistenceConfiguration")', function() {
      // uncomment below and update the code to test the property nativePersistenceConfiguration
      //var instane = new JansConfigApi.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));