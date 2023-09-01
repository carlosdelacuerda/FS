import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  counter: number = 5;

  ngOnInit(): void {
    const int = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(int);
        this.goHome()
      }
    }, 1000);
  }

  goHome() {
    window.location.href = '/home';
  }

}
