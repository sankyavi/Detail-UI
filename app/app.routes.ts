import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RefTableComponent } from './components/ref/reftable.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyComponent } from './components/dummy/dummy.component';




export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DummyComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reference-details/:id', component: RefTableComponent }
];
