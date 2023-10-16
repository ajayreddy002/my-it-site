import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxUiAppComponent } from './ux-ui-app.component';

describe('UxUiAppComponent', () => {
  let component: UxUiAppComponent;
  let fixture: ComponentFixture<UxUiAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxUiAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxUiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
