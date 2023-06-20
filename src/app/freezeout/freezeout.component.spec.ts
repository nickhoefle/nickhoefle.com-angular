import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeoutComponent } from './freezeout.component';

describe('FreezeoutComponent', () => {
  let component: FreezeoutComponent;
  let fixture: ComponentFixture<FreezeoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreezeoutComponent]
    });
    fixture = TestBed.createComponent(FreezeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
