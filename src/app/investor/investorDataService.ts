import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Investor } from '../shared/models/investors.model';
import { Startup } from '../shared/models/startup.model';

@Injectable()
export class InvestorDataService {
    private _host = 'localhost:3000';
    constructor(private _http: Http){
        //
    }

    getProspectiveStartups() {
        return this._http.get(`${this._host}/prospective_startups`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'server error'));

        // let startups: Startup[] = [];
        // return Observable.of(startups);
    }
}