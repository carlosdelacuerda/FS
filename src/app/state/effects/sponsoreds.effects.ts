import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs";
import { SponsoredsService } from "src/app/services/sponsoreds.service";

@Injectable()
export class SponsoredsEffects {

    constructor(
        private actions$: Actions,
        private sponsoredsService: SponsoredsService
    ){}

    loadSponsoreds$ = createEffect(() => this.actions$.pipe(
        ofType('[Sponsoreds API] Load Sponsoreds'),
        mergeMap(() => this.sponsoredsService.getSponsoreds()
            .pipe(
                map(sponsoreds => ({type: '[Sponsoreds API] Sponsoreds Load Success', sponsoreds })),
                catchError(() => EMPTY)
            ))
        )
    )

}