import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMosaicComponent } from './media-mosaic.component';

describe('MediaMosaicComponent', () => {
  let component: MediaMosaicComponent;
  let fixture: ComponentFixture<MediaMosaicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaMosaicComponent]
    });
    fixture = TestBed.createComponent(MediaMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
