import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireFilterComponent } from './tire-filter.component';

describe('TireFilterComponent', () => {
  let component: TireFilterComponent;
  let fixture: ComponentFixture<TireFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TireFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
