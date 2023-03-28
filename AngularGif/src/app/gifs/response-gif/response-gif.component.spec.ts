import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseGifComponent } from './response-gif.component';

describe('ResponseGifComponent', () => {
  let component: ResponseGifComponent;
  let fixture: ComponentFixture<ResponseGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
