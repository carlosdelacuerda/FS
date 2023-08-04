import { createAction, props } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
 
export const actionLogin = createAction(
  '[Login] change tab login',
  props<{login: MenuItem}>()
);

   
