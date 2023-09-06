import { Component, Input, OnInit } from '@angular/core';
import { SponsoredsInterface } from 'src/app/interfaces/sponsoreds.model';
import { AgePipe } from 'src/app/pipes/age.pipe';

@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss']
})
export class SponsoredComponent implements OnInit {

  @Input() sponsored: SponsoredsInterface = {
    id: 0,
    name: '',
    birth: new Date,
    description: '',
    imgs: []
  }

  ngOnInit(): void {
  }

}
