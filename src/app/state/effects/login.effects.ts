import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, of, tap } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import * as singupActions from "../actions/login.actions"

@Injectable()
export class loginEffects {

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ){}

    singUp$ = createEffect(() => this.actions$.pipe(
        ofType('[Login] sing up'),
        mergeMap((singup) => this.loginService.register(singup)
            .pipe(
                map(token => (
                    {type: '[Login] sing up success', token}
                )),
                tap(({token}) => {
                    localStorage.setItem("token", token.token);
                }),
                catchError((error) => of(singupActions.singupFailure(error)))
            )
        ))
    )

}