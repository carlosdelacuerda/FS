import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full' 
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./modules/shareds/legal/legal.module').then(m => m.LegalModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/shareds/errors/errors.module').then(m => m.ErrorsModule)
  },
  {
    path: '**',
    redirectTo: '/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
