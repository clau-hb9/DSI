import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micropráctica ANGULAR - 01';

  public alimentos:Array<[string,number,number]>=[['Arroz tres delicias',3.5,0],['Cerdo agridulce con rabioli',5.5,1],['Ternera con bambú y setas',7,2]];
  public indice = 0;

  public pedido=[];
  public precio=[];
  public total = 0;

  public fecha:Date=new Date();

  public delAlimento(i)
  {
    this.pedido.splice(i,1);
    this.total = this.total - this.precio[i];
    this.precio.splice(i,1);
  
  }
  
  public addAlimento()
  {
    this.pedido.push(''+(this.alimentos[this.indice][0]));
    this.precio.push(''+(this.alimentos[this.indice][1]));
    this.total = this.total + this.alimentos[this.indice][1];
  }

}


