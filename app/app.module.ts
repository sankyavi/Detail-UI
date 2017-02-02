// angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule}  from '@angular/forms';
// user defined component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RefTableComponent }  from './components/ref/reftable.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DummyComponent } from './components/dummy/dummy.component';
// user defined misc imports
import { RefService } from './services/ref.service';
import { LocalStorageService } from './services/localstorage.service';
import { appRouting } from './app.routing';


/**
 * @description Feature module 1 has funtionaily for reference data mgmt
 * @author Avinash 
 * @export FeatureModule1
 * @class FeatureModule1
 * @record Avinash 1/20/2017 updated functinality 1
 * @record Avinash 1/30/2017 removed functinality 2
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
    RefService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}