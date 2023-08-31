import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from './page-error/page-error.component';
import { LottiesModule } from '../animations/animations.module';
import { ErrorsRoutingModule } from './errors-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageErrorComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    LottiesModule,
    ErrorsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ErrorsModule { }
