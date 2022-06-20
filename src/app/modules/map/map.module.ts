import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZDNqYW4yNCIsImEiOiJjbDRtaHAxcDExMzdmM2hueHRuZnRwZjZvIn0.aBbvloMTpcFhVkWv_q2TZw'
    }),
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
