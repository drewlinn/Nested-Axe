import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene07Component } from './scene07.component';

describe('Scene07Component', () => {
  let component: Scene07Component;
  let fixture: ComponentFixture<Scene07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
