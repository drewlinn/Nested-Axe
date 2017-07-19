import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene02Component } from './scene02.component';

describe('Scene02Component', () => {
  let component: Scene02Component;
  let fixture: ComponentFixture<Scene02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
