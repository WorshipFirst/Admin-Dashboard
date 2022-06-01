import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventCategoryComponent } from './view-event-category.component';

describe('ViewEventCategoryComponent', () => {
  let component: ViewEventCategoryComponent;
  let fixture: ComponentFixture<ViewEventCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEventCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
