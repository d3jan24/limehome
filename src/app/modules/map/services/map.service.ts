import { Injectable } from "@angular/core";
import { LngLatLike } from "mapbox-gl";
import { BehaviorSubject } from "rxjs";
import { IHotel } from "../../hotel/models/hotel";
import { IMarker } from "../models/map";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  markers$: BehaviorSubject<IMarker[]> = new BehaviorSubject<IMarker[]>([]);

  mapMarkers(hotels: IHotel[]): void {
    const markers = hotels.map(
      (hotel: IHotel) => {
        return { 
          id: hotel.distance.toString(),
          lngLat: {
            lng: hotel.position.lng, 
            lat: hotel.position.lat 
          } as LngLatLike
        }
      }
    );
    this.markers$.next(markers);
  }
}
