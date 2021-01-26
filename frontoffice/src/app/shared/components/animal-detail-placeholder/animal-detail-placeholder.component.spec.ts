import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailPlaceholderComponent } from './animal-detail-placeholder.component';

describe('AnimalDetailPlaceholderComponent', () => {
  let component: AnimalDetailPlaceholderComponent;
  let fixture: ComponentFixture<AnimalDetailPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalDetailPlaceholderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
