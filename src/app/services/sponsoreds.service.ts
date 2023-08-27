import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { SponsoredsInterface } from '../interfaces/sponsoreds.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {

  urlBase: string = environment.url;

  constructor(private http: HttpClient) {}
 
  getSponsoreds(): Observable<any> {
        return this.http
          .get<SponsoredsInterface[] >(
            `${this.urlBase}getSponsoreds`
          )
  }
}
