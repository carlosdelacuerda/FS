import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sponsoredsInterface } from 'src/app/models/sponsoreds.model';
import { Observable, Subscriber, Subscription, flatMap } from 'rxjs';
import { loadSponsoreds } from 'src/app/state/actions/sponsoreds.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListSponsoreds, selectListSponsoredsError } from 'src/app/state/selectors/sponsoreds.selectors';
import { LoadingInterceptor } from 'src/app/interceptors/loading.interceptor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  sponsoreds$: Observable<ReadonlyArray<sponsoredsInterface>> = new Observable;
  errorLoading$: Observable<any> = new Observable;
  showLoading: boolean = true;
  showLoading$: Observable<any> = new Observable;
  loadingSubscribe: Subscription = new Subscription;
  showError: boolean = false;
  errorNumber: number = 0;

  constructor(
    private store: Store<AppState>,
    public  loadingInterceptor: LoadingInterceptor
    ) {}
 
  ngOnInit() {
    this.store.dispatch( loadSponsoreds() )
    this.sponsoreds$ = this.store.select(selectListSponsoreds)
    this.errorLoading$ = this.store.select(selectListSponsoredsError)
    this.errorLoading$.subscribe(error => {
      this.errorLoading(error)
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoading$ = this.loadingInterceptor.showLoading$
      this.loadingSubscribe = this.showLoading$.subscribe(state => {
        this.showLoading = state
      })
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscribe.unsubscribe()
  }

  errorLoading(error:any){
    if(error){
      this.errorNumber = error.error.status
      this.showError = true;
    }
  }

}