import { ActionReducerMap } from "@ngrx/store";
import { sponsoredsState } from "../models/sponsoreds.model";
import { sponsoredsReducer } from "./reducers/sponsoreds.reducers";
import { MenuItem } from "primeng/api";
import { loginReducer } from "./reducers/login.reducers";
import { loginState } from "../models/login.model";

export interface AppState {
    sponsoreds: sponsoredsState,
    login: loginState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sponsoreds: sponsoredsReducer,
    login: loginReducer
}