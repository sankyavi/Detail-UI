import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() { }
    get(key : any) { return localStorage.getItem(key) }
    set(key : string, value : string) { localStorage.setItem(key, value) }
}