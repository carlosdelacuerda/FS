import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from './page-error/page-error.component';
import { LottiesModule } from '../lotties/lotties.module';

@NgModule({
  declarations: [
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    LottiesModule
  ],
  exports: [
    PageErrorComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ErrorsModule { }
