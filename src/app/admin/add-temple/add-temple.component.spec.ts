import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTempleComponent } from './add-temple.component';

describe('AddTempleComponent', () => {
  let component: AddTempleComponent;
  let fixture: ComponentFixture<AddTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
