import { Component, OnInit,Input, ContentChild,ViewChild,QueryList,ElementRef,AfterViewInit,ContentChildren  } from '@angular/core';

import { option2Component } from '../option2/option2.component';



@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss']
})

export class select2Component implements OnInit {


  public id_comunidad_seleccionada = 1;
  public comunidades:Array<[string, number]>=[['Castilla y León',1], ['Madrid',8], ['Extremadura',10]]




  @ContentChildren(option2Component) option2!:QueryList<option2Component>;



  constructor() {


   }

  ngOnInit() {

  }



  ngAfterViewInit() {




  }

}
