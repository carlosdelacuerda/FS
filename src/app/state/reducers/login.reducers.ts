import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/login.actions';
import { LoggedState, LoginTabsState } from 'src/app/interfaces/login.model';

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

export const initialState: LoggedState = {
  logged: false,
  token: ''
}

export const tokenReducer = createReducer(
  initialState,
  on(actions.actionSingup, (token) => {
    return {...token}
  }),
  on(actions.singupSuccess, (state, token) => {
    return {...state, ...token}
  }),
  on(actions.singupFailure, (state, error) => {
    return {...state, logged:false, error}
  })
)
