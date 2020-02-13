import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashboardComponent } from './dashboard.component';
import { LicenceListingComponent } from '../licences/components/licence-listing/licence-listing.component';
import { ClientListingComponent } from '../clients/components/client-listing/client-listing.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path : '',
      component: MainContentComponent},
      {
        path: 'licences',
        component: LicenceListingComponent
      },
      {
        path: 'clients',
        component: ClientListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
