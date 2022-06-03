import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemplePujaComponent } from './add-temple-puja.component';

describe('AddTemplePujaComponent', () => {
  let component: AddTemplePujaComponent;
  let fixture: ComponentFixture<AddTemplePujaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemplePujaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemplePujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
