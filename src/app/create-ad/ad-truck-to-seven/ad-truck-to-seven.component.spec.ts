import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTruckToSevenComponent } from './ad-truck-to-seven.component';

describe('AdTruckToSevenComponent', () => {
  let component: AdTruckToSevenComponent;
  let fixture: ComponentFixture<AdTruckToSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTruckToSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTruckToSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
