import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { loginState } from 'src/app/models/login.model';
import { actionLogin } from 'src/app/state/actions/login.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLoginFeature } from 'src/app/state/selectors/login.selectors';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  items: MenuItem[] = [
    { label: 'Sing Up', icon: 'pi pi-fw pi-user' },
    { label: 'Logging', icon: 'pi pi-fw pi-sign-in' }
  ];

  activeItem: MenuItem | undefined;

  singup: boolean = true;

  login$: Observable<loginState> = new Observable;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.login$ = this.store.select(selectLoginFeature)
    this.login$.subscribe((tab) => {
        this.onChangeTab(tab)
      })
  }

  activeItemChange(item:MenuItem){
    this.store.dispatch( actionLogin({login: item}))
  }

  onChangeTab(tab:loginState){
      tab.login.label === 'Sing Up' ?
      (this.singup = true ,
      this.activeItem = this.items[0]):
      (this.singup = false,
      this.activeItem = this.items[1])
  }
}
