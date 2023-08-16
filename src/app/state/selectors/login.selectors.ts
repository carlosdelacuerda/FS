import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LoggedState, LoginTabsState } from "src/app/interfaces/login.model";

export const selectTabsLoginFeature = (state: AppState) => state.loginTabs

export const selectTokenFeature = (state: AppState) => state.token

export const selectLogin = createSelector(
    selectTabsLoginFeature,
    (state: LoginTabsState) => state
)

export const selectToken = createSelector(
    selectTokenFeature,
    (state: LoggedState) => state
)
