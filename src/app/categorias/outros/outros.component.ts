import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-outros',
  templateUrl: './outros.component.html',
  styleUrls: ['./outros.component.less']
})
export class OutrosComponent implements OnInit {
  categoria_titulo:string;
  
  constructor() { }

  ngOnInit() {
    this.categoria_titulo = 'Outros';
  }

}
