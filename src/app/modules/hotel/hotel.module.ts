import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HotelBookingComponent } from 'src/app/modules/hotel/components/hotel-booking/hotel-booking.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelApiService } from './services/http/hotel-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HotelListComponent, HotelCardComponent, HotelBookingComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SwiperModule,
  ],
  exports: [HotelListComponent],
  providers: [HotelApiService],
  entryComponents: [HotelBookingComponent],
})
export class HotelModule {}
