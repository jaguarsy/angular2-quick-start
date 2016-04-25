require('zone.js');

/// / (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
if ('production' !== process.env.ENV) {
  // Reflect Polyfill
  require('es7-reflect-metadata/dist/browser');
  Error['stackTraceLimit'] = Infinity;
  Zone['longStackTraceZone'] = require('zone.js/dist/long-stack-trace-zone.min.js');
}

if ('production' === process.env.ENV) {
  let ngCore = require('angular2/core');
  ngCore.enableProdMode();
}

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/router';
import 'angular2/http';
import 'angular2/core';

// RxJS
import 'rxjs';
//
// // Other vendors for example jQuery, Lodash, angular2-jwt
// import 'github-api/github';
