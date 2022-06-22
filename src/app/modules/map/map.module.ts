import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [CommonModule, GoogleMapsModule],
  declarations: [MapComponent],
  exports: [MapComponent],
})
export class MapModule {}
