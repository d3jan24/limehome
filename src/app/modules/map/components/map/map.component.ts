import { Component } from '@angular/core';
import { LngLatBoundsLike, LngLatLike } from 'mapbox-gl';
import { Observable } from 'rxjs';
import { GERMANY_BOUNDS } from 'src/app/constants/coordinates.constants';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'lh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  markers$: Observable<LngLatLike[]> = this.mapService.markers$;
  bounds: LngLatBoundsLike = GERMANY_BOUNDS;

  constructor(
    private mapService: MapService
  ) { }

}