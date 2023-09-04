import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorSettingsRoutingModule } from './sponsor-settings-routing.module';
import { SponsorSettingsComponent } from './sponsor-settings.page';


@NgModule({
  declarations: [
    SponsorSettingsComponent
  ],
  imports: [
    CommonModule,
    SponsorSettingsRoutingModule
  ]
})
export class SponsorSettingsModule { }
