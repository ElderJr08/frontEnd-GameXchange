import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'gx-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.less']
})
export class LogarComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit() {
  }
  Logar(user, pass){
    this.login.Logar(user, pass);
  }
}
