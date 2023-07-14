import { createAction, props } from '@ngrx/store';
import { SponsoredModel } from 'src/app/models/sponsored';
 

export const SponsoredApiActions = createAction(
  '[Sponsoreds API] Sponsoreds Load Success',
  props<{sponsoreds: SponsoredModel[]}>(),
);

   
