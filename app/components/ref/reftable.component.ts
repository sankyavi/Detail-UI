import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/retry';

import { RefService } from '/app/services/ref.service';
import { LocalStorageService } from '/app/services/localstorage.service';

/**
 * @author Avinash 
 * @description calls placeholder service to fetch data 
 * @export PlaceholderComponent
 * @class PlaceholderComponent
 */

@Component({
  templateUrl: './app/components/ref/reftable.component.html',
  styles: [`
		a:first-of-type {
			padding-left: 15px;
		}
		a {
			cursor: pointer;
			cursor: hand;
		}
    .lefty {
			text-align : left;
			padding-left : 15px;
		}
    .pad {
			padding : 4px;
		}
    .bringdown {
			padding-top : 5px;
		}
    .iconshift {
			margin-right: 10px;
		}
    .grey {
      
    }
	`]
})

export class RefTableComponent {

  private sub: any;
  private id: any;
  private master_name: string;
  private master_desc: string;
  private schema: string[];
  private schemaval: string[];
  private references: string[];
  private noofrecords: number;

  private firstpage: boolean = true;
  private lastpage: boolean = false;

  constructor(private _routeParams: ActivatedRoute, private _refService: RefService,
    private _localStorageService: LocalStorageService) { }

  private ngOnInit() {

    $(document).ready(function () {
      $('select').material_select();
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 10 // Creates a dropdown of 15 years to control year
      });
      $('.datepicker1').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 10 // Creates a dropdown of 15 years to control year
      });
    });

    this._routeParams.params
      .map(params => params['id'])
      .switchMap(id => this._refService.getData(id))
      .retry(2)
      .subscribe(
      data => {
        this.master_name = data.name;
        this.getDesc()
        this.schema = data.schema;
        this.references = data.references;
        this.noofrecords = data.totalNumberOfRecords;
      },
      err => { console.log('err occured' + err) },
      () => {console.log('done')}
      )
  }

  //not needed to unsubscribe because it will be auto garbage collected inc the observable on destroying component 
  // private ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  getDesc() {
    this.master_desc = this._localStorageService.get(this.master_name);
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return obj[key];
    });
  }

  generateKeys(obj) {
    return Object.keys(obj).map((key) => { return key });
  }

  showid(num: number) {
    var keys: string[] = this.generateKeys(this.references[num]);
    var values: string[] = this.generateArray(this.references[num]);
    alert("This will open edit Modal for " + keys[0] + ":" + values[0]);
  }
}