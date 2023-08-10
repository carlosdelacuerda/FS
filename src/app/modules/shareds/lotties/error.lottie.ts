import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error-lottie',
  template: '<ng-lottie height="auto" [options]="options"></ng-lottie>'
})
export class ErrorLottieComponent {

  options: AnimationOptions = {
    path: '../../../../assets/animations/error.json',
  };

}