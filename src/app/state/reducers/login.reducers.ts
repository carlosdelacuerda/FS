import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/login.actions';
import { LoginTabsState } from 'src/app/interfaces/login.model';
import {  SponsorState } from 'src/app/interfaces/sponsors.model';

export const initialTabsState: LoginTabsState = {
  login: {
      label: 'Sing Up',
      icon: 'pi pi-fw pi-user'
  }
}
export const loginTabsReducer = createReducer(
  initialTabsState,
  on(actions.actionTabsLogin, (state, login) => {
    return { ...state, login: login.login};
     }
  )
)

export const initialSponsorState: SponsorState = {
    sponsor: {
      logged: false,
      id: 0,
      validated: false,
      name: '',
      img: '',
      favorites: []
    }
}
export const loggingReducer = createReducer(
  initialSponsorState,

  on(actions.actionLogging, (state) => {
    return {...state}
  }),

  on(actions.actionLoggingSuccess, (state, sponsor) => {
    return {...state, ...sponsor, logged: true}
  }),
  
  on(actions.actionLoggingError, (state, error) => {
    return {...state, error}
  })

)
