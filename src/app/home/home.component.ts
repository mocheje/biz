import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: []
})
export class HomeComponent {
    title = 'home';
    homeLogo = "assets/images/home.jpg"

    constructor(private _router: Router) {
        //
    }

    goToinvestorPage() {
        this._router.navigate(['login']);
        // this.router.navigate(['/daily-production-summary'], { queryParams: this.dailyProductionHomeForm.value });
    }
}