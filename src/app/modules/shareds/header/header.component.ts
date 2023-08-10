import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { LoginComponent } from '../dialogs/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService, MessageService]
})
export class HeaderComponent implements OnInit {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService,  public messageService: MessageService) {}

    ngOnInit(): void {
      this.show()
    }

    show() {
      this.ref = this.dialogService.open(LoginComponent,
        {
          width: '70%',
          height: '90%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: false,
          header: 'Sing up or Logging',
          showHeader: false,
          dismissableMask: true,
          styleClass: 'login-modal'
      });    
  }
}
  