import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sponsorLoginGuard } from './guards/sponsor-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'settings',
    canActivate: [sponsorLoginGuard],
    loadChildren: () => import('./pages/sponsor-settings/sponsor-settings.module').then(m => m.SponsorSettingsModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./pages/legal/legal.module').then(m => m.LegalModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/errors/pageErrors.module').then(m => m.PageErrorsModule)
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
