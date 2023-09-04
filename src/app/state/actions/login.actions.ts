import { createAction, props } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { SponsorInterface } from 'src/app/interfaces/sponsors.model';

export const actionTabsLogin = createAction(
  '[Login] change tab login',
  props<{login: MenuItem}>()
);

export const actionLogging = createAction(
  '[Login] logging'
)

export const actionLoggingSuccess = createAction(
  '[Login] Login Success',
  props<{sponsor: SponsorInterface}>()
)

export const actionLoggingError = createAction(
  '[Login] Login Error',
  props<{error: any}>
)



   
