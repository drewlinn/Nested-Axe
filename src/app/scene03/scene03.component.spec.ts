import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene03Component } from './scene03.component';

describe('Scene03Component', () => {
  let component: Scene03Component;
  let fixture: ComponentFixture<Scene03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
