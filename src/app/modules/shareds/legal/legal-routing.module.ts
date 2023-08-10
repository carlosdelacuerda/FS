import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTermsAndConditionsComponent } from './user-terms-and-conditions/user-terms-and-conditions.component';

const routes: Routes = [
  {path: 'user-terms-and-conditions', component: UserTermsAndConditionsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
