import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { LoggedComponent } from './logged/logged.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoggedComponent,
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    DynamicDialogModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
