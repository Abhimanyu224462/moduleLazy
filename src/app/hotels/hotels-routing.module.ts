import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';

const routes: Routes = [
  { path: '', component: HotelsComponent },
  // { path: 'hotel-list', component: HotelListComponent },
  // {path:'hotel-details', component:HotelDetailsComponent},
  // {path:'hotel-search', component:HotelSearchComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
