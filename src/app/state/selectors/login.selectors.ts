import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LoginTabsState } from "src/app/interfaces/login.model";
import { SponsorState } from "src/app/interfaces/sponsors.model";

export const selectTabsLoginFeature = (state: AppState) => state.loginTabs
export const selectTabsLogin = createSelector(
    selectTabsLoginFeature,
    (state: LoginTabsState) => state.login
)

export const selectLoggingFeature:any = (state: AppState) => state.sponsor;

export const selectLogging:any = createSelector(
    selectLoggingFeature,
    (state: SponsorState) => state.sponsor
)

export const selectLoggingError:any = createSelector(
    selectLoggingFeature,
    (state: SponsorState) => state.error
)




