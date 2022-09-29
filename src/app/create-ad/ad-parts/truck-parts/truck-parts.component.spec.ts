import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckPartsComponent } from './truck-parts.component';

describe('TruckPartsComponent', () => {
  let component: TruckPartsComponent;
  let fixture: ComponentFixture<TruckPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
