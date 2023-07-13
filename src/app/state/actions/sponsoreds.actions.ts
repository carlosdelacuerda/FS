import { createActionGroup, props } from '@ngrx/store';
import { SponsoredModel } from 'src/app/models/sponsored';
 

export const SponsoredApiActions = createActionGroup({
  source: 'Sponsoreds API',
  events: {
    'Retrieved Sponsoreds List': props<{ sponsoreds: ReadonlyArray<SponsoredModel> }>(),
  },
});

   