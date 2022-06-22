import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelBookingComponent } from 'src/app/modules/hotel/components/hotel-booking/hotel-booking.component';
import { IHotel } from '../../models/hotel';

@Component({
  selector: 'lh-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent {
  @Input() hotel: IHotel;

  get cardId(): string {
    return `hotel${this.hotel.distance.toString()}`;
  }

  get distanceFromCenter(): string {
    return `${(this.hotel.distance / 1000).toFixed(1)} KM`;
  }

  constructor(private dialog: MatDialog) {}

  onBookClick(): void {
    this.dialog.open(HotelBookingComponent, {
      disableClose: true,
      hasBackdrop: true,
      height: '400px',
      width: '400px',
      data: {
        hotel: this.hotel,
      },
    });
  }
}
