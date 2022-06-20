import { LngLatLike } from "mapbox-gl";

export interface IMarker {
  id: string;
  lngLat: LngLatLike;
}