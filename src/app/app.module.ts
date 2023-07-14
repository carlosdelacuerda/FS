import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { sponsoredsReducer } from 'src/app/state/reducers/sponsoreds.reducers';
import { StoreModule } from '@ngrx/store';
import { HeaderModule } from './modules/shared/header/header.module';
import { EffectsModule } from '@ngrx/effects';
import { SponoredsEffects } from './state/effects/sponsoreds.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ sponsoreds: sponsoredsReducer }),
    HttpClientModule,
    HeaderModule,
    EffectsModule.forRoot(SponoredsEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
