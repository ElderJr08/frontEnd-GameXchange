import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'gx-minhastrocas',
  templateUrl: './minhastrocas.component.html',
  styleUrls: ['./minhastrocas.component.less']
})
export class MinhastrocasComponent implements OnInit {

  constructor(private gameService: GamesService, private route: Router) { }

  ngOnInit() {
    
  }
  

}
