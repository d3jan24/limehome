import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { icon, icon_active } from 'src/app/constants/general.constants';
import { HotelService } from 'src/app/modules/hotel/services/hotel.service';
import { IHotel } from '../../hotel/models/hotel';
import { IMarker } from '../model/map';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  markers$: BehaviorSubject<IMarker[]> = new BehaviorSubject<IMarker[]>([]);

  constructor(private hotelService: HotelService) {
    combineLatest([
      this.hotelService.hotels$,
      this.hotelService.selectedHotel$,
    ]).subscribe(([hotels, selectedHotel]) => {
      this.mapMarkers(hotels, selectedHotel);
    });
  }

  private mapMarkers(hotels: IHotel[], selectedHotel: IHotel): void {
    const markers = hotels.map((hotel: IHotel) => {
      return {
        id: hotel.id,
        lngLat: hotel.position,
        markerOptions: {
          icon: hotel.id === selectedHotel.id ? icon_active : icon,
        },
      };
    });
    this.markers$.next(markers);
  }
}
