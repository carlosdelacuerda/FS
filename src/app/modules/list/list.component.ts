import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sponsoredsInterface } from 'src/app/models/sponsoreds.model';
import { Observable, flatMap } from 'rxjs';
import { loadSponsoreds } from 'src/app/state/actions/sponsoreds.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListSponsoreds } from 'src/app/state/selectors/sponsoreds.selectors';
import { LoadingInterceptor } from 'src/app/interceptors/loading.interceptor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  sponsoreds$: Observable<ReadonlyArray<sponsoredsInterface>> = new Observable;
  showLoading: boolean = true;
  showLoading$: Observable<any> = new Observable;

  constructor(
    private store: Store<AppState>,
    public  loadingInterceptor: LoadingInterceptor
    ) {}
 
  ngOnInit() {
    this.store.dispatch( loadSponsoreds() )
    this.sponsoreds$ = this.store.select(selectListSponsoreds)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoading$ = this.loadingInterceptor.showLoading$
      this.showLoading$.subscribe(state => {
        this.showLoading = state
      })
    });
  }

  ngOnDestroy(): void {
    this.showLoading$.subscribe()
  }

}