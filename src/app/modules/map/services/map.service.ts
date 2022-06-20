import { Injectable } from "@angular/core";
import { LngLat, LngLatBounds, LngLatLike } from "mapbox-gl";
import { BehaviorSubject } from "rxjs";
import { IHotel } from "../../hotel/models/hotel";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  markers$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  mapMarkers(hotels: IHotel[]): void {
    const markers = hotels.map(
      (hotel: IHotel) => {
        return { lng: hotel.position.lng, lat: hotel.position.lat } as LngLatLike
      }
    );
    this.markers$.next(markers);
  }
}
