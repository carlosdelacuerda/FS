import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorSettingsComponent } from './sponsor-settings.page';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    component: SponsorSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorSettingsRoutingModule { }
