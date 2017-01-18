import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description The Dashboard component shows the master list
 * @author Avinash 
 * @export DashboardComponent
 * @class DashboardComponent
 */

@Component({
	selector: 'app-dashboard',
	templateUrl: './app/dashboard/dashboard.component.html',
	styles: [`
		.lefty {
			text-align : left;
			padding-left : 15px;
		}
		.leftyname {
			text-align : left;
			padding-left : 30px;
		}
		a:first-of-type {
			padding-left: 15px;
		}
		a {
			cursor: pointer;
			cursor: hand;
		}
	`]
})
export class DashboardComponent implements OnInit {
	ngOnInit() {
		// make the service call to get master data
		this.saveDescription(); // call to save description of all masters in session storage object
	}
	constructor(private router: Router) { }

	goto(table) {
		var mastertable = table.split(' ').join('');
		console.log("mastertable : " + mastertable);
		this.router.navigate(['reference-details', mastertable]);
	}

	saveDescription() {
		for (var i = 0, l = this.data.masterdata.length; i < l; i++) {
    		var obj = this.data.masterdata[i];
			var mastername = obj.name.split(' ').join('');
			var masterdesc = obj.description;
			sessionStorage.setItem(mastername, masterdesc);
		}
	}

	data =
	{
		"masterdata": [
			{
				"name": "LOB Master",
				"description": "Lob Master"
			},
			{
				"name": "Plan Option Master",
				"description": "Store the relevant plan option"
			},
			{
				"name": "Plan Variant Master",
				"description": "Store the relevant plan variant"
			},
			{
				"name": "Coverage Master",
				"description": "Store the Coverages"
			},
			{
				"name": "Services Master",
				"description": "Store the services"
			},
			{
				"name": "Exclusions Master",
				"description": "Store the Exclusions"
			},
			{
				"name": "ICD Master",
				"description": "Store the ICD codes"
			}
		]
	}

}
