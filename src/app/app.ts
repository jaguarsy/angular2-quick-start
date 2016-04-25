/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    template: `
    <div style="height: 100%">
        My Angular2 App
    </div>
  `,
})
export class App {
}
