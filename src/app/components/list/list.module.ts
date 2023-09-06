import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { SponsoredComponent } from './sponsored-card/sponsored-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from './list.component';
import { ErrorsModule } from '../shareds';
import { PipesModule } from 'src/app/pipes/pipes.module';

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
    ErrorsModule,
    PipesModule
  ]
})
export class ListModule { }
