import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingInterceptor } from './loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoadingInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: LoadingInterceptor,
          multi: true
        }   
  ]
})
export class InterceptorsModule { }
