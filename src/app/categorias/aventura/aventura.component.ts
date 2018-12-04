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
    if(localStorage['logado'] !== undefined || Boolean(localStorage['logado'])){
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
                    newData.splice(Number(x),1,false);
                  }
                }
              }    
            }
          );
          this.actions = newData;
          this.isUserLoggedIn = true;
          this.columns = this.gameService.getColumns();
      },
      err =>{
        console.log(err['status']);
        if(err['status'] === 404){
          alert('fodeu');
        }
      }
    );
  }else{
    this.categoria_titulo = localStorage.getItem('Category');
    this.gameService.action(parseInt(localStorage.getItem('ID_Category')))
    .subscribe(
      data =>{
        this.actions = data['games'];
      }
    );
    this.columns = this.gameService.getColumns();
  }

  }
}

