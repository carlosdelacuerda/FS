import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoggingComponent } from './logging/logging.component';
import { SingupComponent } from './singup/singup.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LoginComponent,
    LoggingComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CheckboxModule,
    TabMenuModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    LoginComponent,
    LoggingComponent,
    SingupComponent
  ]})
export class LoginModule { }
