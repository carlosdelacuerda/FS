import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  items: MenuItem[] = []

  activeItem: MenuItem = this.items[0];

  singup: boolean = true;

  ngOnInit() {
      this.items = [
          { label: 'Sing Up', icon: 'pi pi-fw pi-user' },
          { label: 'Logging', icon: 'pi pi-fw pi-sign-in' }
      ];
  }

  activeItemChange(item:MenuItem){
    (item.label === 'Sing Up') ? (this.singup = true) : (this.singup = false);
  }
}
