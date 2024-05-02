import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hygiene3Component } from './hygiene3.component';

describe('Hygiene3Component', () => {
  let component: Hygiene3Component;
  let fixture: ComponentFixture<Hygiene3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hygiene3Component]
    });
    fixture = TestBed.createComponent(Hygiene3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
