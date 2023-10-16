import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTestingComponent } from './manual-testing.component';

describe('ManualTestingComponent', () => {
  let component: ManualTestingComponent;
  let fixture: ComponentFixture<ManualTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
