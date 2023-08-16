import { createAction, props } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { SingupInterface } from 'src/app/interfaces/login.model'; 

export const actionTabsLogin = createAction(
  '[Login] change tab login',
  props<{login: MenuItem}>()
);

export const actionSingup = createAction(
  '[Login] sing up',
  props<{token: string}>()
)

export const singupSuccess = createAction(
  '[Login] sing up success',
  props<{token: string}>
)

export const singupFailure = createAction(
  '[Login] sing up failure',
  props<any>()
)

   
