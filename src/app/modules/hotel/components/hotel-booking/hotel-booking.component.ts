import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IHotel } from '../../models/hotel';

@Component({
  selector: 'lh-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss'],
})
export class HotelBookingComponent implements OnInit {
  bookHotelForm: FormGroup;
  isBookingComplete: boolean = false;

  get firstName(): FormControl {
    return this.bookHotelForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.bookHotelForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.bookHotelForm.get('email') as FormControl;
  }

  get hotelData(): IHotel {
    return this.data.hotel;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { hotel: IHotel },
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<HotelBookingComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onBookingConfirm(): void {
    if (!this.bookHotelForm.valid) {
      return;
    }
    this.isBookingComplete = true;
    setTimeout(() => this.closeDialog(), 2000);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  private initForm(): void {
    this.bookHotelForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
