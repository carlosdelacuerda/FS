import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingInterceptor } from '../../interceptors/loading.interceptor';

import { ListRoutingModule } from './list-routing.module';
import { SponsoredComponent } from './components/sponsored/sponsored.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from './list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SkeletonModule } from 'primeng/skeleton';
import { ErrorsModule } from '../shareds/errors/errors.module';

@NgModule({
  declarations: [
    SponsoredComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardModule,
    ButtonModule,
    SkeletonModule,
    ErrorsModule
  ],
  providers: [
    LoadingInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: LoadingInterceptor,
          multi: true
        },
  ],
})
export class ListModule { }
