import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { sponsoredsState } from "src/app/models/sponsoreds.model";

export const selectSponsoredsFeature = (state: AppState) => state.sponsoreds

export const selectLoadingSponsoreds = createSelector(
    selectSponsoredsFeature,
    (state: sponsoredsState) => state.loading
)
export const selectListSponsoreds = createSelector(
    selectSponsoredsFeature,
    (state: sponsoredsState) => state.sponsoredsList
)