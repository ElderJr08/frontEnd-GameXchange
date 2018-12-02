import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';
import { Categoria } from '../categorias/categoria.model';
import { RegisterService } from '../registrarusuario/registrarusuario.service';

@Component({
  selector: 'gx-meusjogos',
  templateUrl: './meusjogos.component.html',
  styleUrls: ['./meusjogos.component.less']
})
export class MeusjogosComponent implements OnInit {

  actions: any;
  isUserLoggedIn: boolean;
  columns: string[];
  a:any;

  constructor(private gameService: GamesService) { }

  ngOnInit() {

    this.gameService.getMyGames().subscribe(
      data =>{
        console.log(data);
        this.actions = data;
        this.isUserLoggedIn = true;
      }
    );
    this.columns = this.gameService.getColumns(); 
  }

  RegisterService(titulo,desc,plat,categ){
  
    return false;
  }
  

}

