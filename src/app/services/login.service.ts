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

  public getUser(token:string, userId?: any){
    const headers = new HttpHeaders().set('Auth', token);
    const params = new HttpParams().set('userID', userId);
    this.http.get(`${this.urlBase}getUser`,
      {headers, params}
    )
  }
 
  public register(user:SingupInterface): Observable<any> {
    const url = `${this.urlBase}postRegister`
    return this.http.post(url, user)
  }
}