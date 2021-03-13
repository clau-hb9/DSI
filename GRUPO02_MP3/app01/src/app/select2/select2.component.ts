import { Component, OnInit,Input, ContentChild,ViewChild,QueryList,ElementRef,AfterViewInit,ContentChildren } from '@angular/core';

import { option2Component } from '../option2/option2.component';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss']
})

export class select2Component implements OnInit {

  //public valuesComunidades:Array<[string]> = [] ;
  public indice = 0;
  @Input() Comunidad:string[];
  //public Comunidades :string [];


  @ContentChildren(option2Component) option2!:QueryList<option2Component>;



  constructor() {


   }

  ngOnInit() {

  }

  ngAfterViewInit() {

    //Se muestran 3 formas distintas de acceder a los elementos de la lista:

    for (let option2 of this.option2.toArray()) {
      //console.log(option2.x);
    }


  }

}
