import { Injectable } from "@angular/core";
import { LngLat, LngLatBounds, LngLatLike } from "mapbox-gl";
import { BehaviorSubject } from "rxjs";
import { IHotel } from "../../hotel/models/hotel";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private readonly sw = new LngLat(5.98865807458, 47.3024876979);
  private readonly ne = new LngLat(15.0169958839, 54.983104153);
  readonly bounds = new LngLatBounds(this.sw, this.ne);
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
