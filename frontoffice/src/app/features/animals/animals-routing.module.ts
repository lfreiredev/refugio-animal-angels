import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { DogListingComponent } from './dog-listing/dog-listing.component';
import { AnimalSelectorComponent } from './animal-selector/animal-selector.component';
import { CatListingComponent } from './cat-listing/cat-listing.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalSelectorComponent,
  },
  {
    path: 'pesquisa/cao',
    component: DogListingComponent,
  },
  {
    path: 'pesquisa/gato',
    component: CatListingComponent,
  },
  {
    path: ':id',
    component: AnimalDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
