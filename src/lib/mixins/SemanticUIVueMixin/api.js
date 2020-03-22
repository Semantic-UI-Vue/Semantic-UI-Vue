/* eslint-disable no-unused-vars */

export default {
  name: 'API',
  namespace: 'api',

  debug: false,
  verbose: false,
  performance: true,

  // object containing all templates endpoints
  api: {},

  // whether to cache responses
  cache: true,

  // whether new requests should abort previous requests
  interruptRequests: true,

  // event binding
  on: 'auto',

  // context for applying state classes
  stateContext: false,

  // duration for loading state
  loadingDuration: 0,

  // whether to hide errors after a period of time
  hideError: 'auto',

  // duration for error state
  errorDuration: 2000,

  // whether parameters should be encoded with encodeURIComponent
  encodeParameters: true,

  // API action to use
  action: false,

  // templated URL to use
  url: false,

  // base URL to apply to all endpoints
  base: '',

  // data that will
  urlData: {},

  // whether to add default data to url data
  defaultData: true,

  // whether to serialize closest form
  serializeForm: false,

  // how long to wait before request should occur
  throttle: 0,

  // whether to throttle first request or only repeated
  throttleFirstRequest: true,

  // standard ajax settings
  method: 'get',
  data: {},
  dataType: 'json',

  // mock response
  mockResponse: false,
  mockResponseAsync: false,

  // aliases for mock
  response: false,
  responseAsync: false,

  // callbacks before request
  beforeSend: function(settings) {
    return settings;
  },
  beforeXHR: function(xhr) {},
  onRequest: function(promise, xhr) {},

  // after request
  onResponse: false, // function(response) { },

  // response was successful, if JSON passed validation
  onSuccess: function(response, $module) {},

  // request finished without aborting
  onComplete: function(response, $module) {},

  // failed JSON success test
  onFailure: function(response, $module) {},

  // server error
  onError: function(errorMessage, $module) {},

  // request aborted
  onAbort: function(errorMessage, $module) {},

  successTest: false,

  // errors
  error: {
    beforeSend: 'The before send function has aborted the request',
    error: 'There was an error with your request',
    exitConditions: 'API Request Aborted. Exit conditions met',
    JSONParse: 'JSON could not be parsed during error handling',
    legacyParameters: 'You are using legacy API success callback names',
    method: 'The method you called is not defined',
    missingAction: 'API action used but no url was defined',
    missingSerialize:
      'jquery-serialize-object is required to add form data to an existing data object',
    missingURL: 'No URL specified for api event',
    noReturnedValue:
      'The beforeSend callback must return a settings object, beforeSend ignored.',
    noStorage: 'Caching responses locally requires session storage',
    parseError: 'There was an error parsing your request',
    requiredParameter: 'Missing a required URL parameter: ',
    statusMessage: 'Server gave an error: ',
    timeout: 'Your request timed out',
  },

  regExp: {
    required: /\{\$*[A-z0-9]+\}/g,
    optional: /\{\/\$*[A-z0-9]+\}/g,
  },

  className: {
    loading: 'loading',
    error: 'error',
  },

  selector: {
    disabled: '.disabled',
    form: 'form',
  },

  metadata: {
    action: 'action',
    url: 'url',
  },
};
