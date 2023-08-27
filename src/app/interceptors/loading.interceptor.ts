import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
  public countRequest: number;
  public showLoading$: BehaviorSubject<boolean>;

  constructor() {
    this.showLoading$ = new BehaviorSubject<boolean>(true);
    this.countRequest = 0;
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    let req = request;

    if (!this.countRequest) {
      this.showLoading$.next(true);
    }

    if (token) {
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    this.countRequest++;
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.countRequest--;
          if (!this.countRequest) {
            this.showLoading$.next(false);
          }
        })
      );
  }
}