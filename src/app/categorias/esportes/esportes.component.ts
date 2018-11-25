import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-esportes',
  templateUrl: './esportes.component.html',
  styleUrls: ['./esportes.component.less']
})
export class EsportesComponent implements OnInit {
  categoria_titulo:string;
  
  constructor() { }

  ngOnInit() {
    this.categoria_titulo = 'Esportes';
  }

}
