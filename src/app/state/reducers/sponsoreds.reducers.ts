import { createReducer, on } from '@ngrx/store';

import { SponsoredApiActions } from '../actions/sponsoreds.actions';
import { SponsoredModel } from 'src/app/models/sponsored';

export const initialState: ReadonlyArray<SponsoredModel> = [];

export const sponsoredsReducer = createReducer(
  initialState,
  on(SponsoredApiActions.retrievedSponsoredsList, (_state, { sponsoreds }) => sponsoreds)
);