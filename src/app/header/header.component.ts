import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'gx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{

  constructor() { }

  ngOnInit(){
  
  }

  goTo(whatRoute){
    console.log(whatRoute)
    return false;
  }

}

