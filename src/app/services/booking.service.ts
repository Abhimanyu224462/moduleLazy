import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  bookingList:any = []

  addBooking(booking:any){
    this.bookingList.push(booking)
  }

  getbookingList(){
    return this.bookingList
  }
}
