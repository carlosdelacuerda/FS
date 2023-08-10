import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { UserTermsAndConditionsComponent } from './user-terms-and-conditions/user-terms-and-conditions.component';


@NgModule({
  declarations: [
    UserTermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
