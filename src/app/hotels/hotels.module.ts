import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';


@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent,
    HotelDetailsComponent,
    HotelSearchComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ],
  exports: [
    HotelDetailsComponent,
    HotelListComponent,
    HotelSearchComponent
   
  ]
})
export class HotelsModule { }
