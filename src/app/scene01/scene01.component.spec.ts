import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene01Component } from './scene01.component';

describe('Scene01Component', () => {
  let component: Scene01Component;
  let fixture: ComponentFixture<Scene01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
