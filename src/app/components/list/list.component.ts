import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SponsoredsInterface } from 'src/app/interfaces/sponsoreds.model';
import { Observable, Subscription } from 'rxjs';
import { loadSponsoreds } from 'src/app/state/actions/sponsoreds.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListSponsoreds, selectListSponsoredsError } from 'src/app/state/selectors/sponsoreds.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  sponsoreds$: Observable<ReadonlyArray<SponsoredsInterface>> = new Observable;
  errorLoading$: Observable<any> = new Observable;
  errorLoading: Subscription = new Subscription 

  constructor(
    private store: Store<AppState>,
    private router: Router
    ) {}
 
  ngOnInit() {
    this.store.dispatch( loadSponsoreds() )
    this.sponsoreds$ = this.store.select(selectListSponsoreds)
    this.errorLoading$ = this.store.select(selectListSponsoredsError)
    this.errorLoading = this.errorLoading$.subscribe(error => {
      if(error) {
        this.router.navigate(['home/error']);
      }
    })
  }

  ngOnDestroy(): void {
    this.errorLoading.unsubscribe()
  }

}