import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test3RoutingModule } from './test3-routing.module';
import { Test3CompComponent } from './test3-comp/test3-comp.component';


@NgModule({
  declarations: [
    Test3CompComponent
  ],
  imports: [
    CommonModule,
    Test3RoutingModule
  ]
})
export class Test3Module { }
