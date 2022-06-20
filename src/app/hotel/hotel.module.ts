import { NgModule } from '@angular/core';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelApiService } from './services/http/hotel-api.service';

@NgModule({
  declarations: [
    HotelListComponent,
    HotelCardComponent
  ],
  exports: [HotelListComponent],
  providers: [HotelApiService]
})
export class HotelModule { }
