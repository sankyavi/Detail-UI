import { Injectable } from '@angular/core';
import  { Http , Response } from '@angular/http';

import 'rxjs/add/operator/map';

/**
 * @description calls the service and return a Http response object 
 * @author Avinash 
 * @export PlaceholderService
 * @class PlaceholderService
 */

@Injectable()
export class RefService{
    constructor(private http: Http){}

    getData(id : number) {
        let url = './app/data/' + id + '.json';
        console.log("url in service call: " + url);
        return this.http.get(url).map((res:Response) => res.json());
    }
}
