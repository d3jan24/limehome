import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SWIPER_CONFIG } from 'src/app/constants/swiper-config.constants';
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
export class HotelListComponent implements OnInit, OnDestroy {
  @ViewChild('swiper', { static: false }) swiper: SwiperComponent;
  destroy$: Subject<void> = new Subject();
  selectedHotel: IHotel;

  readonly hotels$: Observable<IHotel[]> = this.hotelService.hotels$;
  readonly swiperConfig: SwiperOptions = SWIPER_CONFIG;

  constructor(private hotelService: HotelService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.hotelService.getHotels();
    this.hotelService.selectedHotel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotel: IHotel) => {
        this.selectedHotel = hotel;
        this.swipeToSelected(hotel);
      });
  }

  onSlideChange(event: any): void {
    const currentSlide: Element = event.slides[event.realIndex];
    const id =  currentSlide.children[0].getAttribute('id');
    if (this.selectedHotel?.id === id) { return; }
    if (!id) { return; }
    const hotel = this.hotelService.getHotelById(id);
    if (!hotel) { return; }
    this.hotelService.selectHotel(hotel);
  }

  private swipeToSelected(hotel: IHotel): void {
    const index = hotel.id?.split('').pop();
    if (!index) { return; }
    this.swiper?.swiperRef.slideTo(+index, 1000, false);
  }

}
