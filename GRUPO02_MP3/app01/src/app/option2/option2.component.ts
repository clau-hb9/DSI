import { Component, OnInit,Directive,Input } from '@angular/core';


@Component({
  selector: 'app-option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.scss']
})

export class option2Component implements OnInit {

  @Input() id:string;
  @Input() texto:string;
  @Input() idPadre:string;
  public provincias:Array<[string,string,string]> = [];





  constructor() {
    this.id = "";
    this.texto = "";
    this.idPadre = "";
   }

   //values_comunidades = [["1", "Castilla y León"],["8", "Madrid"],["10", "Extremadura"]];
   //values_provincias =  [["2", "Ávila","1"],["3", "Segovia","1"],["4", "Soria","1"],["5", "Palencia","1"],["6", "Salamanca","1"],["7", "León","1"],["9", "Madrid","8"],["11", "Badajoz","10"],["12", "Cáceres","10"]];

  ngOnInit() {

  }

}
