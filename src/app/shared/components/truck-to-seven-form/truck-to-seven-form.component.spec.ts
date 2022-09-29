import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckToSevenFormComponent } from './truck-to-seven-form.component';

describe('TruckToSevenFormComponent', () => {
  let component: TruckToSevenFormComponent;
  let fixture: ComponentFixture<TruckToSevenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckToSevenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckToSevenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
