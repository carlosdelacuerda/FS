import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggingFeature } from '../state/selectors/login.selectors';
import { first, tap } from 'rxjs';
import { inject } from '@angular/core';

export const sponsorLoginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const store = (inject(Store));
  const router = (inject(Router));
  const isLogged$ = store.select(selectLoggingFeature).pipe(
    tap((isLogged:any) => {
      if (!isLogged.logged) {
        router.navigate(['/error'])
      }
    }),
    first(isLogged => isLogged)  
  )
  return isLogged$
}

