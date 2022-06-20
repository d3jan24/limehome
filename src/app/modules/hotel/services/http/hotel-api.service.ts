import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IHotel } from "../../models/hotel";

@Injectable()
export class HotelApiService {
  readonly apiUrl = `${environment.apiUrl}/hotels`

  constructor(
    private http: HttpClient
  ) { }

  getHotels(): Observable<IHotel[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map((response: any) => response.items as IHotel[])
      );
  }
}
