import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.less']
})
export class FpsComponent implements OnInit {
  categoria_titulo:string;
  
  constructor() { }

  ngOnInit() {
    this.categoria_titulo = 'FPS';
  }

}
