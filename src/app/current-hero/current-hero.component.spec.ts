import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHeroComponent } from './current-hero.component';

describe('CurrentHeroComponent', () => {
  let component: CurrentHeroComponent;
  let fixture: ComponentFixture<CurrentHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
