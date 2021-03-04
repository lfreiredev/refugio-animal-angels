import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRequestPlaceholderComponent } from './help-request-placeholder.component';

describe('HelpRequestPlaceholderComponent', () => {
  let component: HelpRequestPlaceholderComponent;
  let fixture: ComponentFixture<HelpRequestPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpRequestPlaceholderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpRequestPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
