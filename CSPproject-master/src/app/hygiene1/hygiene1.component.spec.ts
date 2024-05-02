import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hygiene1Component } from './hygiene1.component';

describe('Hygiene1Component', () => {
  let component: Hygiene1Component;
  let fixture: ComponentFixture<Hygiene1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hygiene1Component]
    });
    fixture = TestBed.createComponent(Hygiene1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
