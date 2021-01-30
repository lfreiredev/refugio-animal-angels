import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpRequestsListingComponent } from './help-requests-listing/help-requests-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HelpRequestsListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRequestsRoutingModule {}
