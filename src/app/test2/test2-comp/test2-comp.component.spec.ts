import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2CompComponent } from './test2-comp.component';

describe('Test2CompComponent', () => {
  let component: Test2CompComponent;
  let fixture: ComponentFixture<Test2CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test2CompComponent]
    });
    fixture = TestBed.createComponent(Test2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
