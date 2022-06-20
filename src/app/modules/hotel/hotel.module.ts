import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelApiService } from './services/http/hotel-api.service';

@NgModule({
  declarations: [
    HotelListComponent,
    HotelCardComponent
  ],
  imports: [CommonModule],
  exports: [HotelListComponent],
  providers: [HotelApiService]
})
export class HotelModule { }
