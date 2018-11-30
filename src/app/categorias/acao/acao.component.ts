import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/logar/login.service';
import { GamesService } from '../jogos.service';
import { Categoria } from '../categoria.model';



@Component({
  selector: 'gx-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.less']
})
export class AcaoComponent implements OnInit {
  categoria_titulo:string;
  isUserLoggedIn: boolean;
  actions: Categoria;
  columns: string[];

  constructor(/*private login: LoginService,*/
              private gameService: GamesService) {
    /*this.login.isUserLoggedIn.subscribe( value => {
      if(value){
        this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
      }else{
        this.isUserLoggedIn = false;
      }
    });*/
  }
 
  ngOnInit() {
    this.categoria_titulo = 'Ação';
    this.gameService.action(8)
    .subscribe(
      data => {
        this.actions = data;
      },
      err =>{
        console.log(err['status']);
        if(err['status'] === 404){
          alert('fodeu');
        }
      }
    );
    this.columns = this.gameService.getColumns(); 
  }

}
