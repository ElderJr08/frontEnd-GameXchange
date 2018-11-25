import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { LoginService } from 'src/app/logar/login.service';
import { GamesService } from '../jogos.service';
@Component({
  selector: 'gx-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.less']
})
export class FpsComponent implements OnInit {
  categoria_titulo:string;
  isUserLoggedIn: boolean;
  actions: Categoria;
  columns: string[];
  
  constructor(private login: LoginService,
              private gameService: GamesService) {
    this.login.isUserLoggedIn.subscribe( value => {
      if(value){
        this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
      }else{
        this.isUserLoggedIn = false;
      }
    });
  }
 
  ngOnInit() {
    this.categoria_titulo = 'Esportes';
    this.gameService.action(4)
    .subscribe(actions => this.actions = actions);
    this.columns = this.gameService.getColumns(); 
  }

}
