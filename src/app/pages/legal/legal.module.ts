import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { PrivacyComponent } from './privacy/privacy.page';
import { CookiesComponent } from './cookies/cookies.page';


@NgModule({
  declarations: [
    PrivacyComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
