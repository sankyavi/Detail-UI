import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RefService } from '/app/services/ref.service';
import { LocalStorageService } from '/app/services/localstorage.service';

/**
 * @description The Dashboard component shows the master list
 * @author Avinash 
 * @export DashboardComponent
 * @class DashboardComponent
 */

@Component({
	selector: 'app-dashboard',
	templateUrl: './app/components/dashboard/dashboard.component.html',
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

	masterdata: { name: string, description: string }[] = [];

	constructor(private router: Router, private _localStorageService: LocalStorageService,
		private _refService: RefService) { }

	ngOnInit() {
		// make the service call to get master data
		this._refService.getData("masterdata")
			.subscribe(
			data => this.masterdata = data.masterdata,
			err => { console.log('err occured' + err) },
			() => this.saveDescription() // call to save description of all masters in session storage object
			)
	}

	goto(table: string) {
		var mastertable = table.split(' ').join('');
		console.log("dashboard :: mastertable : " + mastertable);
		this.router.navigate(['reference-details', mastertable]);
	}

	saveDescription() {
		for (var i = 0, l = this.masterdata.length; i < l; i++) {
			var obj = this.masterdata[i];
			var mastername = obj.name;
			var masterdesc = obj.description;

			
			this._localStorageService.set(mastername, masterdesc);
		}
	}
}
