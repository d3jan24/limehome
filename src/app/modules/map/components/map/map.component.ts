import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IHotel } from 'src/app/modules/hotel/models/hotel';
import { HotelService } from 'src/app/modules/hotel/services/hotel.service';
import { IMarker } from '../../model/map';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'lh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map', { static: false }) map: GoogleMap;
  destroy$: Subject<void> = new Subject();
  selectedHotel: IHotel;
  markers: IMarker[];

  constructor(
    private mapService: MapService,
    private hotelService: HotelService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.hotelService.selectedHotel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotel: IHotel) => {
        this.selectedHotel = hotel;
        this.panToMarker();
      });
    this.mapService.markers$
      .pipe(takeUntil(this.destroy$))
      .subscribe((markers: IMarker[]) => {
        this.markers = markers;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onMarkerClick(marker: IMarker): void {
    const lat = marker.lngLat.lat;
    const lng = marker.lngLat.lng;
    const hotel = this.hotelService.hotels$.value.find((hotel: IHotel) => {
      return hotel.position.lat === lat && hotel.position.lng === lng;
    });
    if (hotel) {
      this.hotelService.selectHotel(hotel);
    }
  }

  private panToMarker(): void {
    this.map?.panTo(this.selectedHotel.position);
  }
}
