import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subscription } from 'rxjs';
import { actionSingup } from 'src/app/state/actions/login.actions';
import { AppState } from 'src/app/state/app.state';
import { selectToken } from 'src/app/state/selectors/login.selectors';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  public formGroup: any = FormGroup;
  token$: Observable<string>= new Observable;
  token: Subscription = new Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
    private store: Store<AppState>
    ) { }

  public ngOnInit() {
    this.buildForm();
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
      this.store.dispatch(actionSingup(this.formGroup.value))
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