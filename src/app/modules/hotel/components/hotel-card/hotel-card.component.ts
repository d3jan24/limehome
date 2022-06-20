import { Component, Input } from '@angular/core';
import { IHotel } from '../../models/hotel';

@Component({
  selector: 'lh-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input() hotel: IHotel;

  get cardId(): string {
    return `hotel${this.hotel.distance.toString()}`;
  }
}