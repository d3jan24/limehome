import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'lh-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent implements OnInit {
  hotels$: Observable<IHotel[]> = this.hotelService.hotels$;

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels();
  }
}
