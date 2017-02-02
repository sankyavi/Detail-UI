import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description The autocomplete functionalilty for masters search box
 * @author Avinash 
 * @export AutocompleteComponent
 * @class AutocompleteComponent
 * @record Avinash 1/20/2017 updated functinality 1
 * @record Avinash 1/30/2017 removed functinality 2
 */

@Component({
    selector: 'autocomplete',
    templateUrl: './app/components/autocomplete/autocomplete.component.html',
    styles: [`
        .collection-item {
            background-color:#fff;
        }
        a {
			cursor: pointer;
			cursor: hand;
		}
    `]
})


export class AutocompleteComponent implements OnInit {
    query: string = '';
    masters1 : string[] = [];
    //masters : string[] = [ "Lob Master","Plan Option Master","Plan Variant Master","Master","Coverage Master","Services Master","Standard Exclusions Master","ICD Master"];
    filteredList: string[] = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this.masters1 = Object.keys(localStorage);
    }

    filter() {
        if (this.query !== "") {
            this.filteredList = this.masters1.filter(function (el: string) {
                //return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                // use above if polyfill required for below
                return el.toLowerCase().includes(this.query.toLowerCase());
            }.bind(this));
        } else {
            this.filteredList = [];
        }
    }


    select(item: string) {
        this.query = item;
        this.filteredList = [];
    }

    onClick() {
        var mastertable = this.query.split(' ').join('');
        console.log("autocomplete  :: mastertable : " + mastertable);
        this.router.navigate(['reference-details', mastertable]);
    }
}