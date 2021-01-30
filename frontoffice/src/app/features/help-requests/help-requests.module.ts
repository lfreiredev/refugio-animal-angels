import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpRequestsRoutingModule } from './help-requests-routing.module';
import { HelpRequestsListingComponent } from './help-requests-listing/help-requests-listing.component';

@NgModule({
  declarations: [HelpRequestsListingComponent],
  imports: [
    CommonModule,
    HelpRequestsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HelpRequestsModule {}
