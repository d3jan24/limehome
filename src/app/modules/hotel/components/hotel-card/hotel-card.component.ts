import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelBookingComponent } from 'src/app/modules/hotel/components/hotel-booking/hotel-booking.component';
import { HotelService } from 'src/app/modules/hotel/services/hotel.service';
import { IHotel } from '../../models/hotel';

@Component({
  selector: 'lh-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent {
  @Input() hotel: IHotel;

  get cardId(): string {
    return `${this.hotel.address.countyCode}${this.hotel.distance}`;
  }

  get distanceFromCenter(): string {
    return `${(this.hotel.distance / 1000).toFixed(1)} KM`;
  }

  get isSelected(): boolean {
    const selected = this.hotelService.selectedHotel$.value.position;
    return (
      selected?.lat === this.hotel.position.lat &&
      selected?.lng === this.hotel.position.lng
    );
  }

  constructor(private dialog: MatDialog, private hotelService: HotelService) {}

  onCardClick(): void {
    this.hotelService.selectHotel(this.hotel);
  }

  onBookClick(event: Event): void {
    event?.stopPropagation();
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
