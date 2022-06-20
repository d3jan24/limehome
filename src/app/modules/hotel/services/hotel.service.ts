import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MapService } from "../../map/services/map.service";
import { IHotel } from "../models/hotel";
import { HotelApiService } from "./http/hotel-api.service";

@Injectable()
export class HotelService implements OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  hotels$: BehaviorSubject<IHotel[]> = new BehaviorSubject<IHotel[]>([]);

  constructor(
    private hotelApiService: HotelApiService,
    private mapService: MapService
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
        this.mapService.mapMarkers(hotels);
      });
  }
  
}