import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

/**
 * @description calls the service and return a Http response object 
 * @author Avinash 
 * @export AutocompleteService
 * @class AutocompleteService
 */

@Injectable()
export class AutocompleteService {

    constructor(private http : Http) { }

    getData() {
        let url  = 
    }
}