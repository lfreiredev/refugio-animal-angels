import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalSelectorComponent } from './animal-selector/animal-selector.component';
import { AnimalListingComponent } from './animal-listing/animal-listing.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnimalSelectorComponent, AnimalListingComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule {}
