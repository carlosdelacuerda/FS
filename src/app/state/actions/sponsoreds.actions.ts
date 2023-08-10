import { createAction, props } from '@ngrx/store';
import { sponsoredsInterface } from 'src/app/models/sponsoreds.model';

export const loadSponsoreds = createAction('[Sponsoreds API] Load Sponsoreds');

export const loadedSponsoreds = createAction(
  '[Sponsoreds API] Sponsoreds Load Success',
  props<{sponsoreds: sponsoredsInterface[]}>()
);

export const loadedSponsoredsError = createAction(
  '[Sponsoreds API] Sponsoreds Load Error',
  props<{error: any}>
)

   
