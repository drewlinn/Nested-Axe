import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene06Component } from './scene06.component';

describe('Scene06Component', () => {
  let component: Scene06Component;
  let fixture: ComponentFixture<Scene06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
