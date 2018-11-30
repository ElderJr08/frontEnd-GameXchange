import { Component, OnInit } from '@angular/core';
import { LoginService } from '../logar/login.service';
import { GamesService } from '../categorias/jogos.service';

declare var $: any;

@Component({
  selector: 'gx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
  isUserLoggedIn: boolean;
  NickName: string;
  FullName: string;

  constructor(/*private login: LoginService,*/
              private gameService: GamesService) {
    /*this.login.isUserLoggedIn.subscribe( value => {
      if(value){
        
      }else{
        this.isUserLoggedIn = false;
      }
    });*/
   }

  ngOnInit(){
    this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
    this.NickName = localStorage.getItem('nickname');
    this.FullName = localStorage.getItem('name');
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

