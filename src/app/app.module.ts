import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './state/app.state';
import { SponsoredsEffects } from './state/effects/sponsoreds.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as shareds from './modules/shareds'
import * as interceptors from './interceptors';
import { LottieModule, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { LottiesModule } from './modules/shareds/animations/animations.module';
import { ErrorsModule } from './modules/shareds/errors/errors.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { loginEffects } from './state/effects/login.effects';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( ROOT_REDUCERS ),
    EffectsModule.forRoot( [SponsoredsEffects, loginEffects] ),
    BrowserAnimationsModule,
    HttpClientModule,
    shareds.HeaderModule,
    shareds.DialogsModule,
    LottiesModule,
    ErrorsModule,
    LottieModule.forRoot({ player: playerFactory }),
    ProgressSpinnerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideLottieOptions({
      player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
    }),
    interceptors.LoadingInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: interceptors.LoadingInterceptor,
          multi: true
        },
  ]
})
export class AppModule { }
