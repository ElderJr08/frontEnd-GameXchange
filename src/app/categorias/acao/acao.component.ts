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
  actions: any;
  columns: string[];

  constructor(private gameService: GamesService) {
  }
 
  ngOnInit() {
    var newData = [];
    this.categoria_titulo = localStorage.getItem('Category');
    this.gameService.action(parseInt(localStorage.getItem('ID_Category')))
    .subscribe(
      data => {
        this.gameService.getMyGames().subscribe(
          myGames => {
            for(var x in data['games']){
              newData.push(data['games'][x]);
              for(var y in myGames){
                if(data['games'][x]['id'] === myGames[y]['gameId']){
                  newData.splice(Number(x),1);
                }
              }
            }     
          }
        );
        
        this.actions = newData;
        this.isUserLoggedIn = true;
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
