import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAnimationComponent } from './error.animation';
import { LottieModule } from 'ngx-lottie';

import player from 'lottie-web';
import { NotFoundAnimationComponent } from './notfound.animation';

export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    ErrorAnimationComponent,
    NotFoundAnimationComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports: [
    ErrorAnimationComponent,
    NotFoundAnimationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LottiesModule { }
