import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHotel } from '../models/hotel';
import { HotelApiService } from './http/hotel-api.service';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  hotels$: BehaviorSubject<IHotel[]> = new BehaviorSubject<IHotel[]>([]);
  selectedHotel$: BehaviorSubject<IHotel> = new BehaviorSubject<IHotel>(
    {} as unknown as IHotel
  );

  constructor(private hotelApiService: HotelApiService) {}

  getHotelById(id: string): IHotel | undefined {
    return this.hotels$.value.find((hotel: IHotel) => hotel.id === id);
  }

  getHotels(): void {
    this.hotelApiService.getHotels().subscribe((hotels: IHotel[]) => {
      this.hotels$.next(hotels);
      this.selectedHotel$.next(hotels[0]);
    });
  }

  selectHotel(hotel: IHotel): void {
    this.selectedHotel$.next(hotel);
  }
}
