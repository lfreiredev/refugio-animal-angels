import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCardPlaceholderComponent } from './animal-card-placeholder.component';

describe('AnimalCardPlaceholderComponent', () => {
  let component: AnimalCardPlaceholderComponent;
  let fixture: ComponentFixture<AnimalCardPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalCardPlaceholderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
