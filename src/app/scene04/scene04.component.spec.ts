import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene04Component } from './scene04.component';

describe('Scene04Component', () => {
  let component: Scene04Component;
  let fixture: ComponentFixture<Scene04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
