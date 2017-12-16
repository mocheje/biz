import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent {
    homeLogo = "assets/images/home.jpg"

    constructor(private _router: Router) {
        //
    }

    // goToinvestorPage() {
    //     this._router.navigate(['/investor/4']);
    //     // this.router.navigate(['/daily-production-summary'], { queryParams: this.dailyProductionHomeForm.value });
    // }
}