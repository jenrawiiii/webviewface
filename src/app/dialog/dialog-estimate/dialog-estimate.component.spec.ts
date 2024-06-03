import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEstimateComponent } from './dialog-estimate.component';

describe('DialogEstimateComponent', () => {
  let component: DialogEstimateComponent;
  let fixture: ComponentFixture<DialogEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
