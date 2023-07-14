import { createSelector } from '@ngrx/store';
import { SponsoredModel } from 'src/app/models/sponsored';
export interface FeatureState {
  sponsoreds: SponsoredModel[];
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => state.feature;

export const selectFeatureSponsoreds = createSelector(
  selectFeature,
  (state: FeatureState) => state.sponsoreds
);



