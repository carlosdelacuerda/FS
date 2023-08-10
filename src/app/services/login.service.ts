import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { sponsoredsInterface } from '../models/sponsoreds.model';
import { registerInterface } from '../models/sponsors.model';


@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {
  constructor(private http: HttpClient) {}
 
  public register(user:registerInterface) {
    const url = 'https://demo2552582.mockable.io/postRegister and http://demo2552582.mockable.io/postRegister';
    this.http.post<registerInterface>(url, user)
      .subscribe(res => console.log(res));
  }
}
