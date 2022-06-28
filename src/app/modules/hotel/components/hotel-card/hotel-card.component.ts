import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HotelBookingComponent } from 'src/app/modules/hotel/components/hotel-booking/hotel-booking.component';
import { HotelService } from 'src/app/modules/hotel/services/hotel.service';
import { IHotel } from '../../models/hotel';

@Component({
  selector: 'lh-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent implements OnInit, OnDestroy {
  @Input() hotel: IHotel;
  isSelected: boolean = false;
  destroy$: Subject<void> = new Subject();

  get distanceFromCenter(): string {
    return `${(this.hotel.distance / 1000).toFixed(1)} KM`;
  }

  constructor(
    private dialog: MatDialog, 
    private hotelService: HotelService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.hotelService.selectedHotel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotel: IHotel) => {
        this.isSelected = hotel.id === this.hotel.id;
        this.changeDetectorRef.detectChanges();
      });
  }

  onBookClick(event: Event): void {
    event?.stopPropagation();
    this.dialog.open(HotelBookingComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '400px',
      data: {
        hotel: this.hotel,
      },
    });
  }
}
