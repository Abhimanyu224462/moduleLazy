import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3CompComponent } from './test3-comp.component';

describe('Test3CompComponent', () => {
  let component: Test3CompComponent;
  let fixture: ComponentFixture<Test3CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test3CompComponent]
    });
    fixture = TestBed.createComponent(Test3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
