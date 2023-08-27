import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { LoginComponent } from '../dialogs/login/login.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoggingFeature } from 'src/app/state/selectors/login.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService, MessageService]
})
export class HeaderComponent implements OnInit {

    ref: DynamicDialogRef | undefined;
    logged: boolean = false;
    logged$: Observable<any> = new Observable;

    constructor(
      public dialogService: DialogService,
      public messageService: MessageService,
      private store: Store
      ) {}

    ngOnInit(): void {
      this.logged$ = this.store.select(selectLoggingFeature)
      this.logged$.subscribe(console.log)
    }

    show() {
      this.ref = this.dialogService.open(LoginComponent,
        {
          width: '70%',
          height: '90%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10,
          maximizable: false,
          header: 'Sing up or Logging',
          showHeader: false,
          dismissableMask: true,
          styleClass: 'login-modal'
      });    
  }
}
  