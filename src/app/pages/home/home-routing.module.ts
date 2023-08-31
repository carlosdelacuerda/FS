import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('../../components/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'error',
    component: HomeComponent,
    loadChildren: () => import('../../components/shareds/errors/errors.module').then(m => m.ErrorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
