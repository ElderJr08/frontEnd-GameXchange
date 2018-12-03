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
                  console.log(data['games'][x]);
                  newData.splice(Number(x),1,"");
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
    /*this.categoria_titulo = localStorage.getItem('Category');
    this.gameService.action(parseInt(localStorage.getItem('ID_Category')))
    .subscribe(actions => this.actions = actions);
    this.columns = this.gameService.getColumns(); */
  }

}

