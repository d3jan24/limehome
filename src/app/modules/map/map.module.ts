import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MAPBOX_TOKEN } from 'src/app/constants/map.constants';
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: MAPBOX_TOKEN
    }),
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
