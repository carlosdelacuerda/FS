import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { sponsoredsInterface } from '../models/sponsoreds.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {

  urlBase: string = environment.url;

  constructor(private http: HttpClient) {}
 
  getSponsoreds(): Observable<Array<sponsoredsInterface>> {
    return this.http
      .get<sponsoredsInterface[] >(
        `${this.urlBase}getSponsoreds`
      )
  }
}
