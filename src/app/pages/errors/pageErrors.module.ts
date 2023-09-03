import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './pageErrors-routing.module';
import { NotFoundComponent } from './not-found/not-found.page';
import { ErrorsModule } from 'src/app/components/shareds';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    ErrorsModule
  ]
})
export class PageErrorsModule { }
