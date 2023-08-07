import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { sponsoredsInterface } from '../models/sponsoreds.model';


@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {
  constructor(private http: HttpClient) {}
 
  getSponsoreds(): Observable<Array<sponsoredsInterface>> {
    return this.http
      .get<sponsoredsInterface[] >(
        'https://demo2552582.mockable.io/getSponsoreds'
      )
  }
}
