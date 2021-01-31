import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() pageSize: number = 1;
  @Input() set _dataSize(value: number) {
    this.dataSize = value;
    this.pages = [];
    if (Math.floor(this.dataSize / this.pageSize) == 0) {
      this.pages.push(1);
    } else {
      for (let i = 1; i <= Math.floor(this.dataSize / this.pageSize); i++) {
        this.pages.push(i);
      }
    }
  }

  @Output() pageNumberChanged = new EventEmitter<number>();

  dataSize: number;
  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  navigateTo(index: number) {
    this.pageNumber = index;
    this.pageNumberChanged.emit(this.pageNumber);
  }

  navigateToPrevious() {
    if (this.pageNumber == 0) return;
    this.navigateTo(--this.pageNumber);
  }

  navigateToNext() {
    if (this.pageNumber == this.pages.length - 1) return;
    this.navigateTo(++this.pageNumber);
  }
}
