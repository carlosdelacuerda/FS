import { createReducer, on } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { actionLogin } from '../actions/login.actions';
import { loginState } from 'src/app/models/login.model';

export const initialState: loginState = {
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