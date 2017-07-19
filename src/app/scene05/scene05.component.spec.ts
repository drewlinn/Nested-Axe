import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene05Component } from './scene05.component';

describe('Scene05Component', () => {
  let component: Scene05Component;
  let fixture: ComponentFixture<Scene05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
