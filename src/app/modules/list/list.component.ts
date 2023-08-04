import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sponsoredsModel } from 'src/app/models/sponsoreds.model';
import { Observable } from 'rxjs';
import { loadSponsoreds } from 'src/app/state/actions/sponsoreds.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListSponsoreds } from 'src/app/state/selectors/sponsoreds.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sponsoreds$: Observable<ReadonlyArray<sponsoredsModel>> = new Observable;

  constructor(
    private store: Store<AppState>,
    ) {}
 
  ngOnInit() {
    this.store.dispatch( loadSponsoreds() )
    this.sponsoreds$ = this.store.select(selectListSponsoreds)
  }

}