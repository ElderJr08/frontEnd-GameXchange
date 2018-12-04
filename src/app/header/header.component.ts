import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  Genders: any;
  Notification: string;

  constructor(private gameService: GamesService,
              private router: Router) {
    this.gameService.getCategorias().pipe(
      map(response => response.json())
      ).subscribe(
        data => {
          this.Genders = data;
          console.log(this.Genders);
          /*let categorias = '';
          for(var x in data){
            console.log(data[x]['id']);
            console.log(data[x]['name']);
            categorias+='<li><a href="javascript:;" onclick="goTo('+data[x]['id']+','+data[x]['name']+')" style="text-transform: capitalize;">'+data[x]['name']+'</a></li>'
          }
          document.getElementById('teste').innerHTML = categorias;*/
        }
      )
  }

  ngOnInit(){
    this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
    this.NickName = localStorage.getItem('nickname');
    this.FullName = localStorage.getItem('name');
    if(localStorage['logado'] !== undefined || Boolean(localStorage['logado'])){
      this.gameService.Proposals()
      .subscribe(
        data =>{
          this.Notification = data['length'];
        }
      );
    }
  }
  Exit(){
    localStorage.clear();
    location.replace('');
  }

  goTo(id, category){
    console.log(id)
    localStorage.setItem('ID_Category',id);
    localStorage.setItem('Category',category);

    this.router.navigate(['/genero/'+category+'']);

    return false;
  }
}

