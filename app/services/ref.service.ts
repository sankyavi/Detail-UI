import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

/**
 * @description Generic service to fetch data from a json and return a response json
 * @author Avinash 
 * @export RefService
 * @class RefService
 */

@Injectable()
export class RefService {

    constructor(private _http: Http) { }

    getData(id: string) {
        let url = './app/data/' + id + '.json';
        console.log("url in service call: " + url);
        return this._http.get(url).map((res: Response) => res.json());
    }
}
