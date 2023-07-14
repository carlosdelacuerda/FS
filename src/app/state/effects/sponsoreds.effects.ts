import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { SponsoredsService } from 'src/app/services/sponsoreds.service';

@Injectable()
export class SponoredsEffects {

  loadSponsoreds$ = createEffect(() => this.actions$.pipe(
    ofType('[Sponsoreds Page] Load Sponsoreds'),
    exhaustMap(() => this.sponsoredsService.getSponsoreds()
      .pipe(
        map(sponsoreds => ({ type: '[Sponsoreds API] Sponsoreds Load Success', payload: sponsoreds })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private sponsoredsService: SponsoredsService
  ) {}
}