import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IHotel } from "../models/hotel";
import { HotelApiService } from "./http/hotel-api.service";

@Injectable()
export class HotelService implements OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  hotels$: BehaviorSubject<IHotel[]> = new BehaviorSubject<IHotel[]>([]);

  constructor(
    private hotelApiService: HotelApiService
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getHotels(): void {
    this.hotelApiService.getHotels()
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotels: IHotel[]) => {
        this.hotels$.next(hotels);
      })
  }
  
}