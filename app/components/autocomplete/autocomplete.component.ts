import { Component } from '@angular/core';
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
    templateUrl: './app/autocomplete/autocomplete.component.html',
    styles : [`
        .collection-item {
            background-color:#fff;
        }
        a {
			cursor: pointer;
			cursor: hand;
		}
    `]
})


export class AutocompleteComponent {
    public query: String = '';
    public masters : String[] = [ "Lob Master","Plan Option Master","Plan Variant Master","Master","Coverage Master","Services Master","Standard Exclusions Master","ICD Master"];
    //public masters: String[] = ["Coverage Master", "Dino Master", "KungFu Master"];
    public filteredList: String[] = [];

    constructor(private router: Router) { }

    filter() {
        if (this.query !== "") {
            this.filteredList = this.masters.filter(function (el: String) {
                //return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                // use above if polyfill required for below
                return el.toLowerCase().includes(this.query.toLowerCase());
            }.bind(this));
        } else {
            this.filteredList = [];
        }
    }


    select(item: String) {
        this.query = item;
        this.filteredList = [];
    }
    onClick() {
        var mastertable = this.query.split(' ').join('');
        console.log("mastertable : " + mastertable);
        this.router.navigate(['reference-details', mastertable]);
    }
}