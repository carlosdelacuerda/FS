import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environments';
import { SingupInterface } from '../interfaces/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase: string = environment.url

  constructor(public http: HttpClient) {}

  public getSponsor(){
    return this.http.get(`${this.urlBase}getSponsor`)
  }
 
  public register(user:SingupInterface): Observable<any> {
    const url = `${this.urlBase}postRegister`
    return this.http.post(url, user)
  }


}