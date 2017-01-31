import { Component } from '@angular/core';
import { Router} from '@angular/router';

/**
 * @author Avinash 
 * @description Root Component
 * @export AppComponent
 * @class AppComponent
 */

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    title = "reference Table managmanent App";

    constructor(private router: Router) { }

    onClick4() {
        this.router.navigate(['dashboard']);
    }
}
