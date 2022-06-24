import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { IHotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'lh-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HotelListComponent implements OnInit {
  @ViewChild(SwiperComponent) swiper: SwiperComponent;
  hotels$: Observable<IHotel[]> = this.hotelService.hotels$;
  readonly swiperConfig: SwiperOptions = {
    freeMode: false,
    loop: true,
    loopFillGroupWithBlank: true,
    slideToClickedSlide: true,
  };

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels();
  }
}
