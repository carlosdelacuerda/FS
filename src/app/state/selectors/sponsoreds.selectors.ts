import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { sponsoredsState } from "src/app/interfaces/sponsoreds.model";

export const selectSponsoredsFeature = (state: AppState) => state.sponsoreds

export const selectLoadingSponsoreds = createSelector(
    selectSponsoredsFeature,
    (state: sponsoredsState) => state.loading
)
export const selectListSponsoreds = createSelector(
    selectSponsoredsFeature,
    (state: sponsoredsState) => state.sponsoredsList
)
export const selectListSponsoredsError = createSelector(
    selectSponsoredsFeature,
    (state: sponsoredsState) => state.error
)