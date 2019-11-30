import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponentComponent } from './image-detail-component.component';

describe('ImageDetailComponentComponent', () => {
  let component: ImageDetailComponentComponent;
  let fixture: ComponentFixture<ImageDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
