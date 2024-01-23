import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instance4Component } from './instance4.component';

describe('Instance4Component', () => {
  let component: Instance4Component;
  let fixture: ComponentFixture<Instance4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Instance4Component]
    });
    fixture = TestBed.createComponent(Instance4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
