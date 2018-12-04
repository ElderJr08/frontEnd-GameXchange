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
      var usersDTO =[];
      this.gameService.Proposals()
      .subscribe(
        data =>{
          this.gameService.getUser(7).subscribe(
            user=>{
              console.log(data);
              console.log(user);
              for(var x in data){
                var userDTO = {
                  nickname: user['nickname'],
                  interest: data[x]['game']['name'],
                  date: data[x]['requestDate']
                }
                usersDTO.push(userDTO);
              }
              console.log(usersDTO);
              this.isUserLoggedIn = true;
              
            }
          );
          this.users = usersDTO;
          
        }
      );
      this.columns = this.gameService.getColumnsUsers();
    }
  }
  
  goToUser(requestId){
    localStorage.setItem('requestId',requestId);
    this.route.navigate(['/list/requester']);
    return false;
  }

}



