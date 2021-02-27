import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micropráctica ANGULAR - 02';

  public coches:Array<[string,string,string,Date,Date,number,boolean]>=[["./assets/scenic.jpeg",'RENAULT','scenic',new Date("2007"),new Date(2018,3),3000, false],["./assets/seat.jpg",'SEAT','ibiza',new Date("2003"),new Date(2018,2),2000, false],["./assets/megane.jpg",'RENAULT','megane',new Date("2007"),new Date(2018,2),4000, false],["",'TESLA','model 3',new Date("2007"),new Date(2018,2),1000, false]];

  public filtro ="";
  public filtrados=[];

  public getFiltro(){
    
    this.filtrados =[];
    if (this.filtro==""){
      return this.coches;
    } else {
      for(let i=0; i<this.coches.length; i++){
        if(this.coches[i][1].includes(this.filtro.toUpperCase())){
            this.filtrados.push(this.coches[i]);
            console.log(this.filtrados);
        }
      }
     
    }
    return this.filtrados;
  }

  public Rebajar(marca)
  {
    for(let i=0; i<this.coches.length; i++){
      if(this.coches[i][2] == marca){
        this.coches[i][5] -= this.coches[i][5]*0.10;
        this.coches[i][6] = true;
      }
    }
  
  }
  
  public Vender(marca)
  {
    for(let i=0; i<this.coches.length; i++){
      if(this.coches[i][2] == marca){
        this.coches.splice(i,1);
      }
    }
    
    
  }

}


