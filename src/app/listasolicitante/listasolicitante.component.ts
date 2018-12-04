import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'gx-listasolicitante',
  templateUrl: './listasolicitante.component.html',
  styleUrls: ['./listasolicitante.component.less']
})
export class ListasolicitanteComponent implements OnInit {
  categoria_titulo:string;
  isUserLoggedIn: boolean;
  actions: any;
  columns: string[];

  constructor(private gameService: GamesService, private route: Router) { }

  ngOnInit() {
    
    this.gameService.getUser(localStorage.getItem('requestId')).subscribe(
      data =>{
        console.log(data);
        this.categoria_titulo = 'Lista de jogos de '+data['nickname'];
        this.actions = data['games'];
        this.isUserLoggedIn = true;
        this.columns = this.gameService.getColumns();
      }
    )
  }

  modalClose(){
    $('#modal-default').toggle();
    return false;
  }
  exchange(requestergameId){
    console.log(requestergameId, localStorage.getItem('proposalId'));
    this.gameService.exchange(parseInt(localStorage.getItem('proposalId')), requestergameId).subscribe(
      data =>{
        console.log(data);
        $('#modal-default').toggle();
        $('#info-match').html();
      }
    );
    return false;
    
  }

}
