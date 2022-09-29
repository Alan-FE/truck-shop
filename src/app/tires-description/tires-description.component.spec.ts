import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiresDescriptionComponent } from './tires-description.component';

describe('TiresDescriptionComponent', () => {
  let component: TiresDescriptionComponent;
  let fixture: ComponentFixture<TiresDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiresDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiresDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
