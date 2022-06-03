import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTemplePujaComponent } from './view-temple-puja.component';

describe('ViewTemplePujaComponent', () => {
  let component: ViewTemplePujaComponent;
  let fixture: ComponentFixture<ViewTemplePujaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTemplePujaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTemplePujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
