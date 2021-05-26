import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditOffersService {
  private _URLBASE = 'products';
  constructor(private http: HttpClient) { }

  get(params: {partyId: string}): Observable<any> {
      const httpParams = new HttpParams({fromObject: params});
      return this.http.get(this._URLBASE, {params: httpParams});
  }
  // post(body: {phone: string}): Observable<any> {
  //     return this.http.post(this._URLBASE, body);
  // }
}
