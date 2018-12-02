import { Component, OnInit } from '@angular/core';
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

  constructor(private gameService: GamesService) {
  }
 
  ngOnInit() {
    this.categoria_titulo = localStorage.getItem('Category');
    this.gameService.action(parseInt(localStorage.getItem('ID_Category')))
    .subscribe(
      data => {
        console.log(data);
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
