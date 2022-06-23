import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { icon, icon_active } from 'src/app/constants/general.constants';
import { IHotel } from '../../hotel/models/hotel';
import { IMarker } from '../model/map';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  markers$: BehaviorSubject<IMarker[]> = new BehaviorSubject<IMarker[]>([]);

  mapMarkers(hotels: IHotel[]): void {
    const markers = hotels.map((hotel: IHotel) => {
      return {
        id: hotel.id,
        lngLat: { lng: hotel.position.lng, lat: hotel.position.lat },
        markerOptions: {
          icon: icon,
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
          icon: icon_active,
        };
        return marker;
      }
      marker.markerOptions = {
        icon: icon,
      };
      return marker;
    });
    this.markers$.next(markers);
  }
}
