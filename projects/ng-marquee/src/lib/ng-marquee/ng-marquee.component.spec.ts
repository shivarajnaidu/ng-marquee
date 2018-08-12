import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMarqueeComponent } from './ng-marquee.component';

describe('NgMarqueeComponent', () => {
  let component: NgMarqueeComponent;
  let fixture: ComponentFixture<NgMarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMarqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
