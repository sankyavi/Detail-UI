import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule}  from '@angular/forms';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RefTableComponent }  from './ref/reftable.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DummyComponent } from './dummy/dummy.component';


import { RefService } from './ref/ref.service';


/**
 * 
 * 
 * @export
 * @class AppModule
 */

@NgModule({
  declarations: [
    AppComponent,
    RefTableComponent,
    DashboardComponent,
    AutocompleteComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    appRouting
  ],
  providers: [
    RefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}