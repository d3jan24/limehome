import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMarker } from 'src/app/modules/map/model/map';
import { MapService } from '../../map/services/map.service';
import { IHotel, IPosition } from '../models/hotel';
import { HotelApiService } from './http/hotel-api.service';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  hotels$: BehaviorSubject<IHotel[]> = new BehaviorSubject<IHotel[]>([]);
  selectedHotel$: BehaviorSubject<IHotel> = new BehaviorSubject<IHotel>(
    {} as unknown as IHotel
  );

  constructor(
    private hotelApiService: HotelApiService,
    private mapService: MapService
  ) {}

  getHotels(): void {
    this.hotelApiService.getHotels().subscribe((hotels: IHotel[]) => {
      this.hotels$.next(hotels);
      this.mapService.mapMarkers(hotels);
    });
  }

  selectHotel(hotel: IHotel): void {
    this.mapService.updateMarkerPin(hotel);
    this.selectedHotel$.next(hotel);
  }
}
