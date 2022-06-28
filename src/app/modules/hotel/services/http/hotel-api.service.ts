import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CollectionDto, IHotel } from '../../models/hotel';

@Injectable()
export class HotelApiService {
  readonly apiUrl = `${environment.apiUrl}/hotels`;

  constructor(private http: HttpClient) {}

  getHotels(): Observable<IHotel[]> {
    return this.http.get<CollectionDto<IHotel>>(this.apiUrl).pipe(
      map((response: CollectionDto<IHotel>) =>
        response.items.map((item: IHotel) => {
          const id = response.items.indexOf(item);
          return this.mapHotelWithId(id, item);
        })
      )
    );
  }

  private mapHotelWithId(id: number, data: IHotel): IHotel {
    return {
      id: `${id}`,
      title: data.title,
      address: data.address,
      position: data.position,
      distance: data.distance,
    };
  }
}
