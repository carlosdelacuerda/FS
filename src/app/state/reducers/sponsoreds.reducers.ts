import { createReducer, on } from '@ngrx/store';
import { sponsoredsState } from 'src/app/models/sponsoreds.model';
import { loadSponsoreds, loadedSponsoreds, loadedSponsoredsError } from '../actions/sponsoreds.actions';

export const initialState: sponsoredsState = {
  loading: false,
  sponsoredsList: [],
  error: ''
}

export const sponsoredsReducer = createReducer(
  initialState,

  on(loadSponsoreds, (state) => {
    return { ...state, loading: true }
  }
  ),

  on(loadedSponsoreds, (state, {sponsoreds}) => {
    return { ...state,  sponsoredsList: sponsoreds, loading: false }
  }
  ),

  on(loadedSponsoredsError, (state, error) => {
    return {...state, error}
  })
)