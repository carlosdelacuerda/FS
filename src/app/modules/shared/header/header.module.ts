import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
