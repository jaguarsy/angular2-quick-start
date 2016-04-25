/*
 * Providers provided by Angular
 */
import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {getAppInjector} from './appInjector';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main () {
    bootstrap(App, [
        ...('production' === process.env.ENV ? [] : ELEMENT_PROBE_PROVIDERS),
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true}),
    ]).then(injectorRef => getAppInjector(injectorRef.injector))
        .catch(err => console.error(err));
});
