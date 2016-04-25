/**
 * Created by Raphael on 2016/4/19.
 */
import {Injector} from 'angular2/core';
let appInjector;

export function getAppInjector (injector?: Injector) {
  if (!injector) {
    return appInjector;
  }
  appInjector = injector;
  return appInjector;
}
