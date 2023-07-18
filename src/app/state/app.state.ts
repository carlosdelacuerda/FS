import { ActionReducerMap } from "@ngrx/store";
import { sponsoredsState } from "../models/sponsoreds.model";
import { sponsoredsReducer } from "./reducers/sponsoreds.reducers";

export interface AppState {
    sponsoreds: sponsoredsState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sponsoreds: sponsoredsReducer
}