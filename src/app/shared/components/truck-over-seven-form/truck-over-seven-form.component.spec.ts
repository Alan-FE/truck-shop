import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckOverSevenFormComponent } from './truck-over-seven-form.component';

describe('TruckOverSevenFormComponent', () => {
  let component: TruckOverSevenFormComponent;
  let fixture: ComponentFixture<TruckOverSevenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckOverSevenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckOverSevenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
