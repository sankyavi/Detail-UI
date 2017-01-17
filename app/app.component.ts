import { Component } from '@angular/core';
import { Router} from '@angular/router';


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
