import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginInterface } from 'src/app/models/login.model';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  public formGroup:any = FormGroup;

  user: loginInterface = {
    email: '',
    password: ''
  };
  
  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  logging(){
    this.user = this.formGroup.value;
    console.log(this.user)
  }

}
