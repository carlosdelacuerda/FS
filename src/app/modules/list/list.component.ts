import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectSponsoreds } from 'src/app/state/selectors/sponsoreds.selectors';
import { SponsoredsService } from 'src/app/services/sponsoreds.service';
import { SponsoredApiActions } from 'src/app/state/actions/sponsoreds.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sponsoreds$ = this.store.select(selectSponsoreds);
 
  constructor(private sponsoredsService: SponsoredsService, private store: Store) {}
 
  ngOnInit() {
    this.sponsoredsService
      .getSponsoreds()
      .subscribe((sponsoreds) =>
        this.store.dispatch(SponsoredApiActions.retrievedSponsoredsList({ sponsoreds }))
      );
  }

}