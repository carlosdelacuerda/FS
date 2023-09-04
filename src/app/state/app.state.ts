import { ActionReducerMap } from "@ngrx/store";
import { sponsoredsState } from "../interfaces/sponsoreds.model";
import { sponsoredsReducer } from "./reducers/sponsoreds.reducers";
import { loggingReducer, loginTabsReducer } from "./reducers/login.reducers";
import { LoginTabsState } from "../interfaces/login.model";
import { SponsorState } from "../interfaces/sponsors.model";

export interface AppState {
    sponsoreds: sponsoredsState,
    loginTabs: LoginTabsState,
    sponsor: SponsorState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sponsoreds: sponsoredsReducer,
    loginTabs: loginTabsReducer,
    sponsor: loggingReducer
}