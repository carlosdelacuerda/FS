import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { sponsoredsModel } from '../models/sponsoreds.model';

@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {
  constructor(private http: HttpClient) {}
 
  getSponsoreds(): Observable<Array<sponsoredsModel>> {
    return this.http
      .get<sponsoredsModel[] >(
        'https://demo2552582.mockable.io/getSponsoreds'
      )
  }
}
