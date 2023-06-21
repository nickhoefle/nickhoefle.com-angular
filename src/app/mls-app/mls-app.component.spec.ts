import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLSAppComponent } from './mls-app.component';

describe('MLSAppComponent', () => {
  let component: MLSAppComponent;
  let fixture: ComponentFixture<MLSAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MLSAppComponent]
    });
    fixture = TestBed.createComponent(MLSAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
