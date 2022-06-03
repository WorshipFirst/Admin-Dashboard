import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTempleComponent } from './view-temple.component';

describe('ViewTempleComponent', () => {
  let component: ViewTempleComponent;
  let fixture: ComponentFixture<ViewTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
