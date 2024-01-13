import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2RoutingModule } from './test2-routing.module';
import { Test2CompComponent } from './test2-comp/test2-comp.component';


@NgModule({
  declarations: [
    Test2CompComponent
  ],
  imports: [
    CommonModule,
    Test2RoutingModule
  ]
})
export class Test2Module { }
