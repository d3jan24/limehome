import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LngLatBoundsLike, LngLatLike, Map } from 'mapbox-gl';
import { Observable } from 'rxjs';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'lh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  markers$: Observable<LngLatLike[]> = this.mapService.markers$;
  bounds: LngLatBoundsLike = this.mapService.bounds;

  constructor(
    private mapService: MapService
  ) { }

}