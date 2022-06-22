import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHotel } from '../../hotel/models/hotel';
import { IMarker } from '../model/map';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  markers$: BehaviorSubject<IMarker[]> = new BehaviorSubject<IMarker[]>([]);

  constructor() {}

  mapMarkers(hotels: IHotel[]): void {
    const markers = hotels.map((hotel: IHotel) => {
      return {
        id: `${hotel.address.countyCode}${hotel.distance}`,
        lngLat: { lng: hotel.position.lng, lat: hotel.position.lat },
        markerOptions: {
          icon: './assets/icons/home-icon.svg',
        },
      };
    });
    this.markers$.next(markers);
  }

  updateMarkerPin(hotel: IHotel): void {
    const markers = this.markers$.value.map((marker: IMarker) => {
      if (
        marker.lngLat.lat === hotel.position.lat &&
        marker.lngLat.lng === hotel.position.lng
      ) {
        marker.markerOptions = {
          icon: './assets/icons/home-icon-active.svg',
        };
        return marker;
      }
      marker.markerOptions = {
        icon: './assets/icons/home-icon.svg',
      };
      return marker;
    });
    this.markers$.next(markers);
  }
}
