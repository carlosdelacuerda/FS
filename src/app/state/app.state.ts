import { ActionReducerMap } from "@ngrx/store";
import { sponsoredsState } from "../interfaces/sponsoreds.model";
import { sponsoredsReducer } from "./reducers/sponsoreds.reducers";
import { loginTabsReducer, tokenReducer } from "./reducers/login.reducers";
import { LoggedState, LoginTabsState } from "../interfaces/login.model";

export interface AppState {
    sponsoreds: sponsoredsState,
    loginTabs: LoginTabsState,
    token: LoggedState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sponsoreds: sponsoredsReducer,
    loginTabs: loginTabsReducer,
    token: tokenReducer
}