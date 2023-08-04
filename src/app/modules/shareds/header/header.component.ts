import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { LoginComponent } from '../dialogs/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService, MessageService]
})
export class HeaderComponent {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService,  public messageService: MessageService) {}

    show() {
      this.ref = this.dialogService.open(LoginComponent,
        {
          width: '70%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: false
      });    
  }
}
  