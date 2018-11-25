import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.less']
})
export class AcaoComponent implements OnInit {
  categoria_titulo:string;

  constructor() { }

  ngOnInit() {
    this.categoria_titulo = 'Ação';
  }

}
