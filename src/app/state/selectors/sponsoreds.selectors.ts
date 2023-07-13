import { createFeatureSelector } from '@ngrx/store';
import { SponsoredModel } from 'src/app/models/sponsored';

export const selectSponsoreds = createFeatureSelector<ReadonlyArray<SponsoredModel>>('sponsoreds');

