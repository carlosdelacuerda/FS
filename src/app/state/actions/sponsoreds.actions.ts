import { createAction, props } from '@ngrx/store';
import { SponsoredsInterface } from 'src/app/interfaces/sponsoreds.model';

export const loadSponsoreds = createAction('[Sponsoreds API] Load Sponsoreds');

export const loadedSponsoreds = createAction(
  '[Sponsoreds API] Sponsoreds Load Success',
  props<{sponsoreds: SponsoredsInterface[]}>()
);

export const loadedSponsoredsError = createAction(
  '[Sponsoreds API] Sponsoreds Load Error',
  props<{error: any}>
)

   
