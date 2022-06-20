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
    document.querySelector(`#hotel${marker.id}`)?.scrollIntoView(
      {
        behavior: 'smooth'
      }
    );
  }

}