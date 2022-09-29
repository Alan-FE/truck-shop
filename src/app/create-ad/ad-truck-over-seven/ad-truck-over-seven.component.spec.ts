import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTruckOverSevenComponent } from './ad-truck-over-seven.component';

describe('AdTruckOverSevenComponent', () => {
  let component: AdTruckOverSevenComponent;
  let fixture: ComponentFixture<AdTruckOverSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTruckOverSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTruckOverSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
