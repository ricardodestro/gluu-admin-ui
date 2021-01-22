import { getDefaultClient } from "./base";
const JansConfigApi = require("jans_config_api");
const api = new JansConfigApi.AttributeApi(getDefaultClient(JansConfigApi));

// Get all attributes
export const getAllAttributes = () => {
  return new Promise((resolve, reject) => {
    api.getAttributes({}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};