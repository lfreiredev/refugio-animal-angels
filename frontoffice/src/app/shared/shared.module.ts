import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AnimalCardPlaceholderComponent } from './components/animal-card-placeholder/animal-card-placeholder.component';
import { SearchComponent } from './components/search/search.component';
import { AnimalDetailPlaceholderComponent } from './components/animal-detail-placeholder/animal-detail-placeholder.component';

@NgModule({
  declarations: [
    PaginationComponent,
    AnimalCardPlaceholderComponent,
    AnimalDetailPlaceholderComponent,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    PaginationComponent,
    AnimalCardPlaceholderComponent,
    AnimalDetailPlaceholderComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
