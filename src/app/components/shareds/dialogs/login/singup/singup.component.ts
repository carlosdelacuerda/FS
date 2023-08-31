import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Observer, Subscription, first } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoginService } from 'src/app/services/login.service';
import { actionLogging } from 'src/app/state/actions/login.actions';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit, OnDestroy {

  public formGroup: any = FormGroup;
  waitingConfirmation$: Observable<any> = new Observable;
  waitingConfirmation: Subscription = new Subscription;
  
  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
    private loginService: LoginService,
    public store: Store
    ) { }

  public ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.waitingConfirmation.unsubscribe();
  }

  public register() {
    if(this.formGroup.invalid){ 
      const smalls = document.querySelectorAll('small');
      smalls.forEach((element) => {
        element.classList.add('red')
      })
    }
    if(this.formGroup.value.legal != 'true'){
      document.querySelector('.legal label')?.classList.add('p-error')
    }
    if(!this.formGroup.invalid) {
      const observer: Observer<any> = {
        next: (token) => localStorage.setItem('token', token),
        error: (err) => console.log(err),
        complete: () => this.store.dispatch(actionLogging())
      }
      const register$ = this.loginService.register(this.formGroup.value);
      register$.pipe(
        first()
      ).subscribe(observer)
    }
  }

  removeRed() {
    document.querySelector('.legal label')?.classList.remove('p-error')
  }  

  private buildForm() {
    
    const today = new Date().toISOString().substring(0);
    const minPassLength = 6;
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      name: ['',
        [Validators.required, Validators.minLength(3)
        ]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(minPassLength)
      ]],
      repeatpassword: ['', [
        Validators.required, Validators.minLength(minPassLength), this.matchValidator('password')
      ]],
      legal: [[], [
        Validators.required
      ]],
    });
  }

  private matchValidator(
    matchTo: string, 
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl): 
    ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] ;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === 
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

  close() {
    this.ref.close()
  }
}