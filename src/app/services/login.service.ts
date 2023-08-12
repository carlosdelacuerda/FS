import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environments';
import { SingupInterface } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class SponsoredsService {

  urlBase: string = environment.url

  constructor(private http: HttpClient) {}
 
  public register(user:SingupInterface) {
    const url = `${this.urlBase}postSponsor`
    this.http.post<SingupInterface>(url, user)
  }
}
