import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.less']
})
export class AventuraComponent implements OnInit {
  categoria_titulo:string;
  
  constructor() { }

  ngOnInit() {
    this.categoria_titulo = 'Aventura';
  }

}
