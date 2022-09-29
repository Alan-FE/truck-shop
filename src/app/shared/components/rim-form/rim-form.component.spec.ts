import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimFormComponent } from './rim-form.component';

describe('RimFormComponent', () => {
  let component: RimFormComponent;
  let fixture: ComponentFixture<RimFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
