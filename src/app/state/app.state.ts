import { ActionReducerMap } from "@ngrx/store";
import { sponsoredsState } from "../models/sponsoreds.model";
import { sponsoredsReducer } from "./reducers/sponsoreds.reducers";
import { loginReducer } from "./reducers/login.reducers";
import { LoginState } from "../models/login.model";

export interface AppState {
    sponsoreds: sponsoredsState,
    login: LoginState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sponsoreds: sponsoredsReducer,
    login: loginReducer
}