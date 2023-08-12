import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LoginState } from "src/app/models/login.model";

export const selectLoginFeature = (state: AppState) => state.login

export const selectLogin = createSelector(
    selectLoginFeature,
    (state: LoginState) => state
)
