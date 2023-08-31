import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found-animation',
  template: '<ng-lottie height="auto" [options]="options"></ng-lottie>'
})
export class NotFoundAnimationComponent {

  options: AnimationOptions = {
    path: '../../../../assets/animations/notfound.json',
  };

}