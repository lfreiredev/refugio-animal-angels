import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListingComponent } from './animal-listing/animal-listing.component';
import { AnimalSelectorComponent } from './animal-selector/animal-selector.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalSelectorComponent,
  },
  {
    path: 'pesquisa/:type',
    component: AnimalListingComponent,
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
