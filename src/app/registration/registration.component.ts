import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: []
})
export class RegistrationComponent {
    homeLogo = "assets/images/home.jpg"

    constructor(private _router: Router) {
        //
    }

    // goToinvestorPage() {
    //     this._router.navigate(['/investor/4']);
    //     // this.router.navigate(['/daily-production-summary'], { queryParams: this.dailyProductionHomeForm.value });
    // }
}