import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micropráctica ANGULAR - 01';

  private alimentos:Array<[string,number,number]>=[['Arroz tres delicias',3.5,0],['Cerdo agridulce con rabioli',5.5,1],['Ternera con bambú y setas',7,2]];
  public alimento:string='Arroz tres delicias';
  public precio:string='3.5'
  public indice =0;
  public pedido=[];
  public lista_precios = [];
  public fecha:Date=new Date();
  
  public total:number = 0;
  public getFecha(){
       return this.fecha;
  }
  public getAlimentos()
  {
    return this.alimentos;
  }

  public delAlimento(i)
  {
    this.pedido.splice(i,1);
    this.lista_precios.splice(i,1);

    this.total = 0;
    for (let i= 0; i < this.lista_precios.length; i++){
      // convierto el string a int
      var x = this.lista_precios[i];
      var y:number = +x; 
      this.total += y;
     

    }
  }
  
  public addAlimento(i)
  {
    this.pedido.push(''+(this.alimentos[i][0]));
    this.lista_precios.push(''+(this.alimentos[i][1]));
    this.total += this.alimentos[i][1];
    console.log(this.total);
  }

}


