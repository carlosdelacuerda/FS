import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { SponsoredModel } from 'src/app/models/sponsored';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sponsoreds$: Observable<SponsoredModel[]> = this.store.select(state => state.sponsoreds);
 
  constructor( private store: Store<{ sponsoreds: SponsoredModel[] }>) {}
 
  ngOnInit() {
    this.store.dispatch({ type: '[Sponsoreds Page] Load Sponsoreds' });
  }

}