import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instance3Component } from './instance3.component';

describe('Instance3Component', () => {
  let component: Instance3Component;
  let fixture: ComponentFixture<Instance3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Instance3Component]
    });
    fixture = TestBed.createComponent(Instance3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
