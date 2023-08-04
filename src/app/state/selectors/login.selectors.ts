import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { loginState } from "src/app/models/login.model";

export const selectLoginFeature = (state: AppState) => state.login

export const selectLogin = createSelector(
    selectLoginFeature,
    (state: loginState) => state
)
