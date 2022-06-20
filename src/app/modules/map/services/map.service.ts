import { Injectable } from "@angular/core";
import { LngLat, LngLatLike } from "mapbox-gl";
import { BehaviorSubject } from "rxjs";
import { IHotel } from "../../hotel/models/hotel";
import { IMarker } from "../model/map";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  markers$: BehaviorSubject<IMarker[]> = new BehaviorSubject<IMarker[]>([]);
  center: LngLatLike;

  mapMarkers(hotels: IHotel[]): void {
    const markers = hotels.map(
      (hotel: IHotel) => {
        return { 
          id: hotel.distance.toString(),
          lngLat: new LngLat(hotel.position.lng, hotel.position.lat)
        }
      }
    );
    this.calculateCenter(markers);
    this.markers$.next(markers);
  }

  private calculateCenter(markers: IMarker[]): void {
    let lng = 0;
    let lat = 0;
    const count = markers?.length;
    markers.reduce((accumulator, marker) => {
      lng = accumulator + marker.lngLat.lng;
      lat = accumulator + marker.lngLat.lat
      return 0;
    }, 0);
    this.center = { lng: lng / count, lat: lat / count };
  }
}
