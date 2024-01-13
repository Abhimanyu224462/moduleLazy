import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from './test-comp/test-comp.component';



@NgModule({
  declarations: [
    TestCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestCompComponent
  ]
})
export class Test1Module { }
