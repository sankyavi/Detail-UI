import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

/**
 * @description The Dashboard component shows the master list
 * @author Avinash 
 * @export DashboardComponent
 * @class DashboardComponent
 */
@Component({
	selector: 'app-dashboard',
	templateUrl: './app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	ngOnInit() {

	}
	constructor(private router: Router) { }

	showcolumncontrol: boolean = false;

	generateKeys(obj) {
		return Object.keys(obj).map((key) => { return key });
	}

	generateArray(obj) {
		return Object.keys(obj).map((key) => {
			//console.log(key + ' -> ' + obj[key]); 
			return obj[key];
		});
	}

	showColumnsToggle() {
		this.showcolumncontrol = !this.showcolumncontrol;
	}

	goto(table) {
        var  mastertable = table.split(' ').join('');
        console.log("mastertable : "+mastertable); 
        this.router.navigate(['reference-details', mastertable]);
    }
	getStyle(status,index){
		if(index == 7){
		if(status === "Active"){
			console.log("Active");
			return "green";
		}else {
			return "red";
		} 
		}
		if(index == 0){
			return ;
		}
	}

	cols: any = {
		headers:
		[{
			"field": "name",
			"title": "Name",
			"show": true,
			"editable": false
		},
		{
			"field": "description",
			"title": "Description",
			"show": true,
			"editable": false
		},
		{
			"field": "createdOn",
			"title": "Created On",
			"show": false,
			"editable": true
		},
		{
			"field": "createdBy",
			"title": "Created By",
			"show": false,
			"editable": true
		},
		{
			"field": "expiryDate",
			"title": "Expiry Date",
			"show": true,
			"editable": true
		},
		{
			"field": "lastModifiedDate",
			"title": "Last Modified Date",
			"show": true,
			"editable": true
		},
		{
			"field": "lastModifiedBy",
			"title": "Last Modified By",
			"show": true,
			"editable": true
		},
		{
			"field": "status",
			"title": "Status",
			"show": true,
			"editable": false
		}]
	}

	data =
	{
		data: [
			{
				"name": "LOB Master",
				"description": "Lob Master",
				"createdOn": "15/09/2012",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2012",
				"lastModifiedBy": "234567",
				"status": "Active"
			},
			{
				"name": "Plan Option Master",
				"description": "Store the relevant plan option",
				"createdOn": "15/09/2012",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2012",
				"lastModifiedBy": "234567",
				"status": "Active"
			},
			{
				"name": "Plan Variant Master",
				"description": "Store the relevant plan variant",
				"createdOn": "15/09/2015",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2016",
				"lastModifiedBy": "234567",
				"status": "Expired"
			},
			{
				"name": "Plan Variant Master",
				"description": "Store the relevant plan variant",
				"createdOn": "15/09/2016",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2016",
				"lastModifiedBy": "234567",
				"status": "Expired"
			},
			{
				"name": "Coverage Master",
				"description": "Store the Coverages",
				"createdOn": "15/09/2012",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2012",
				"lastModifiedBy": "234567",
				"status": "Expired"
			},
			{
				"name": "Services Master",
				"description": "Store the services",
				"createdOn": "15/09/2012",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2012",
				"lastModifiedBy": "234567",
				"status": "Expired"
			},
			{
				"name": "Exclusions Master",
				"description": "Store the Exclusions",
				"createdOn": "15/09/2018",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2018",
				"lastModifiedBy": "234567",
				"status": "Active"
			},
			{
				"name": "ICD Master",
				"description": "Store the ICD codes",
				"createdOn": "15/09/2012",
				"createdBy": "459788",
				"expiryDate": "NA",
				"lastModifiedDate": "15/20/2012",
				"lastModifiedBy": "234567",
				"status": "Expired"
			}
		]
	}

}
