import { createReducer, on } from '@ngrx/store';
import { actionLogin } from '../actions/login.actions';
import { LoginState } from 'src/app/models/login.model';

export const initialState: LoginState = {
  login: {
      label: 'Sing Up',
      icon: 'pi pi-fw pi-user'
  }
}

export const loginReducer = createReducer(
  initialState,
  on(actionLogin, (state, login) => {
    return { ...state, login: login.login};
     }
  )
)
