import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './state/app.state';
import { SponsoredsEffects } from './state/effects/sponsoreds.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as shareds from './modules/shareds'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( ROOT_REDUCERS ),
    EffectsModule.forRoot( [SponsoredsEffects] ),
    BrowserAnimationsModule,
    HttpClientModule,
    shareds.HeaderModule,
    shareds.DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
