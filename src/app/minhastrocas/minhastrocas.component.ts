import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';

@Component({
  selector: 'gx-minhastrocas',
  templateUrl: './minhastrocas.component.html',
  styleUrls: ['./minhastrocas.component.less']
})
export class MinhastrocasComponent implements OnInit {

  constructor(private gameService: GamesService) { }

  ngOnInit() {
  }

}
