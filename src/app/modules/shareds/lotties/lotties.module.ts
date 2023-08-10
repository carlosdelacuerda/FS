import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLottieComponent } from './error.lottie';
import { LottieModule } from 'ngx-lottie';

import player from 'lottie-web';

export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    ErrorLottieComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports: [
    ErrorLottieComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LottiesModule { }
