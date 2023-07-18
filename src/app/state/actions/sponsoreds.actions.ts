import { createAction, props } from '@ngrx/store';
import { sponsoredsModel } from 'src/app/models/sponsoreds.model';
 
export const loadSponsoreds = createAction('[Sponsoreds API] Load Sponsoreds');

export const loadedSponsoreds = createAction(
  '[Sponsoreds API] Sponsoreds Load Success',
  props<{sponsoreds: sponsoredsModel[]}>()
);

   
