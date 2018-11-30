import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

declare var $: any;
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
    if(user === "" && pass === ""){
      $('#input-username').addClass('has-error');
      $('#input-password').addClass('has-error');
      $('#input-username').children('span').addClass('glyphicon-remove');
      $('#input-password').children('span').addClass('glyphicon-remove');
    }
    this.login.Logar(user, pass);
  }
}
