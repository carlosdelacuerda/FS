import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error-animation',
  template: '<ng-lottie height="auto" [options]="options"></ng-lottie>'
})
export class ErrorAnimationComponent {

  options: AnimationOptions = {
    path: '../../../../assets/animations/error.json',
  };

}