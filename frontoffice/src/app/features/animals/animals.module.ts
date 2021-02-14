import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalSelectorComponent } from './animal-selector/animal-selector.component';
import { DogListingComponent } from './dog-listing/dog-listing.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalLastPostedComponent } from './animal-last-posted/animal-last-posted.component';
import { CatListingComponent } from './cat-listing/cat-listing.component';

@NgModule({
  declarations: [
    AnimalSelectorComponent,
    DogListingComponent,
    CatListingComponent,
    AnimalDetailComponent,
    AnimalLastPostedComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AnimalsModule {}
