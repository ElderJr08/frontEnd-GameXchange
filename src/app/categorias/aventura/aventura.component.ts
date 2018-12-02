import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/logar/login.service';
import { GamesService } from '../jogos.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'gx-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.less']
})
export class AventuraComponent implements OnInit {
  categoria_titulo:string;
  isUserLoggedIn: boolean;
  actions: Categoria;
  columns: string[];
  
  constructor(private gameService: GamesService) {
  }
 
  ngOnInit() {
    this.categoria_titulo = localStorage.getItem('Category');
    this.gameService.action(parseInt(localStorage.getItem('ID_Category')))
    .subscribe(actions => this.actions = actions);
    this.columns = this.gameService.getColumns(); 
  }

}

