import { createReducer, on } from '@ngrx/store';
import { sponsoredsState } from 'src/app/models/sponsoreds.model';
import { loadSponsoreds, loadedSponsoreds } from '../actions/sponsoreds.actions';

export const initialState: sponsoredsState = {
  loading: false,
  sponsoredsList: []
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
  )
)