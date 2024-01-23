import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent {

  bookingData:any
  constructor(private bookingSvc:BookingService){
    this.bookingData = this.bookingSvc.getbookingList()
  }

}
