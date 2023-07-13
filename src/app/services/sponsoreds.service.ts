import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SponsoredModel } from '../models/sponsored';

@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {
  constructor(private http: HttpClient) {}
 
  getSponsoreds(): Observable<Array<SponsoredModel>> {
    return this.http
      .get<{ items: SponsoredModel[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((sponsoreds) => sponsoreds.items || []));
  }
}
