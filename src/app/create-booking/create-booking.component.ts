import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent {
  bookingForm!: FormGroup

  constructor(private fb:FormBuilder, private bookingSvc:BookingService){
  }

  ngOnInit(){
    this.createFormStructure()
  }

  createFormStructure(){
    this.bookingForm = this.fb.group({
      'source': ['',[Validators.required]],
      'destination': ['', [Validators.required]],
      'category': ['', [Validators.required]]
    })
  }
  formData:any
  createBooking(){
    console.log("create form data", this.bookingForm.value)
    this.formData = this.bookingForm.value
    this.bookingSvc.addBooking(this.formData)
  }

}
