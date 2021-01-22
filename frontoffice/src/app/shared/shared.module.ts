import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AnimalCardPlaceholderComponent } from './components/animal-card-placeholder/animal-card-placeholder.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    PaginationComponent,
    AnimalCardPlaceholderComponent,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    PaginationComponent,
    AnimalCardPlaceholderComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
