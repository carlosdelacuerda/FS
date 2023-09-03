import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { LoginComponent } from '../shareds/dialogs/login/login.component';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { selectLoggingFeature } from 'src/app/state/selectors/login.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService, MessageService]
})
export class HeaderComponent implements OnInit, OnDestroy {

    ref: DynamicDialogRef | undefined;
    logged: Subscription = new Subscription;
    logged$: Observable<any> = new Observable();
    identified: boolean = false;

    constructor(
      public dialogService: DialogService,
      public messageService: MessageService,
      private store: Store
      ) {}

    ngOnInit(): void {
      this.logged$ = this.store.select(selectLoggingFeature).pipe(
        tap(state => {
          this.identified = !!(state.logged)
          return state})
      )
      this.logged = this.logged$.subscribe()
    }

    ngOnDestroy(): void {
      this.logged.unsubscribe();
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
  