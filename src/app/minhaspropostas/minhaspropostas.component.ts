import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'gx-minhaspropostas',
  templateUrl: './minhaspropostas.component.html',
  styleUrls: ['./minhaspropostas.component.less']
})
export class MinhaspropostasComponent implements OnInit {

  isUserLoggedIn: boolean;
  users: any;
  columns: string[];
  constructor(private gameService: GamesService, private route: Router) { }

  ngOnInit() {
    if(localStorage['logado'] !== undefined || Boolean(localStorage['logado'])){
      let  usersDTO = [];
      this.gameService.Proposals()
      .subscribe(
        data =>{
          console.log(data);
         for(var x in data){
          let userDTO = {
            "proposalId": data[x]['id'],
            "requesterId": data[x]['requesterId'],
            "requesterName": data[x]['requesterName'],
            "game": data[x]['game']['name'],
            "requestDate": data[x]['requestDate']         
          }
          usersDTO.push(userDTO);
         }
         console.log(usersDTO)
          
        }
      );
      this.isUserLoggedIn = true;
      this.users = usersDTO;
      this.columns = this.gameService.getColumnsUsers();
    }
  }
  
  goToUser(requestId, proposalId){
    console.log(requestId, proposalId);
    localStorage.setItem('requestId',requestId);
    localStorage.setItem('proposalId',proposalId);
    this.route.navigate(['/listasolicitante']);
    return false;
  }

}



