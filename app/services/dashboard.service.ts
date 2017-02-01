import { Injectable } from '@angular/core';
import  { Http , Response } from '@angular/http';



/**
 * 
 * 
 * @export
 * @class DashboardService
 */
@Injectable()
export class DashboardService{
    constructor(private http: Http){}

    getData(id : number) {
        let url = './app/ref/' + id + '.json';
        console.log("url in service call: " + url);
        return this.http.get(url).map((res:Response) => res.json());
    }
}
