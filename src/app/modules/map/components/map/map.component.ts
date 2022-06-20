import { Component } from '@angular/core';
import { LngLatBoundsLike } from 'mapbox-gl';
import { Observable } from 'rxjs';
import { GERMANY_BOUNDS } from 'src/app/constants/coordinates.constants';
import { IMarker } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'lh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  markers$: Observable<IMarker[]> = this.mapService.markers$;
  bounds: LngLatBoundsLike = GERMANY_BOUNDS;

  constructor(
    private mapService: MapService
  ) { }

  onMarkerClick(marker: IMarker): void {
    const allHotels = document.querySelectorAll('.current-hotel');
    allHotels.forEach((hotel: Element) => hotel.classList.remove('current-hotel'));
    console.log(allHotels);
    const selected = document.querySelector(`#hotel${marker.id}`);
    selected?.scrollIntoView({
      behavior: 'smooth'
    });
    selected?.classList.add('current-hotel');
  }

}