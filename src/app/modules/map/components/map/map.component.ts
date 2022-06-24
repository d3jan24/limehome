import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
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
export class MapComponent implements OnDestroy, AfterViewInit {
  @ViewChild('map', { static: false }) map: GoogleMap;
  readonly markers$: Observable<IMarker[]> = this.mapService.markers$;
  destroy$: Subject<void> = new Subject();
  selectedHotel: IHotel;

  constructor(
    private mapService: MapService,
    private hotelService: HotelService
  ) {
    this.hotelService.selectedHotel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotel: IHotel) => {
        this.selectedHotel = hotel;
        this.panToMarker();
      });
  }

  ngAfterViewInit(): void {
    this.map.panTo({ lat: 48.137154, lng: 11.576124 });
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
      this.scrollToItem(marker.id);
    }
  }

  private scrollToItem(id: string): void {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  private panToMarker(): void {
    this.map?.panTo(this.selectedHotel.position);
  }
}
