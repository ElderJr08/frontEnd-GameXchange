import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.less']
})
export class RpgComponent implements OnInit {
  categoria_titulo:string;
  
  constructor() { }

  ngOnInit() {
    this.categoria_titulo = 'RPG';
  }

}
