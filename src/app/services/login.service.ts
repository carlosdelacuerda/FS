import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { registerInterface } from '../models/sponsors.model';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {

  urlBase: string = environment.url

  constructor(private http: HttpClient) {}
 
  public register(user:registerInterface) {
    const url = `${this.urlBase}postSponsor`
    this.http.post<registerInterface>(url, user)
  }
}
