import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hygiene2Component } from './hygiene2.component';

describe('Hygiene2Component', () => {
  let component: Hygiene2Component;
  let fixture: ComponentFixture<Hygiene2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hygiene2Component]
    });
    fixture = TestBed.createComponent(Hygiene2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
