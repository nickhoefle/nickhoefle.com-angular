import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcComponentComponent } from './cc-component.component';

describe('CcComponentComponent', () => {
  let component: CcComponentComponent;
  let fixture: ComponentFixture<CcComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcComponentComponent]
    });
    fixture = TestBed.createComponent(CcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
