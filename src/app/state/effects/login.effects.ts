import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, of, tap } from "rxjs";
import { LoginService } from "src/app/services/login.service";
@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ){}

    getSponsor$ = createEffect(() => this.actions$.pipe(
        ofType('[Login] logging'),
        mergeMap(() => this.loginService.getSponsor()
            .pipe(
                map(sponsor => ({type: '[Login] Login Success', sponsor })),
                catchError((error) => of({ type: '[Login] Login Error', error}))
            ))
        )
    )


}