import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListModule } from 'src/app/components/list/list.module';
import { DialogsModule } from 'src/app/components/shareds';
import { LottiesModule } from 'src/app/components/shareds/animations/animations.module';
import { ErrorsModule } from 'src/app/components/shareds/errors/errors.module';
import { HomeComponent } from './home.page';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListModule,
    HeaderModule,
    DialogsModule,
    LottiesModule,
    ErrorsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
