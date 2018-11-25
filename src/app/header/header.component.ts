import { Component, OnInit } from '@angular/core';
import { LoginService } from '../logar/login.service';

declare var $: any;

@Component({
  selector: 'gx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
  isUserLoggedIn: boolean;
  NickName: string;

  constructor(private login: LoginService) {
    this.login.isUserLoggedIn.subscribe( value => {
      console.log(value);
      if(value){
        this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
        this.NickName = localStorage.getItem('nickname');
      }else{
        this.isUserLoggedIn = false;
      }
    });
   }

  ngOnInit(){
  }
  Exit(){
    localStorage.clear();
    location.replace('');
  }

  goTo(whatRoute){
    console.log(whatRoute)
    return false;
  }

}

