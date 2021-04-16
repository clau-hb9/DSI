import { Component, Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import {Contacto} from './contacto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()

export class AppComponent {
  title = 'micropractica4';
  agenda: Contacto[];

  user1:Contacto = new Contacto (0, "Claudia Fernández Estebaranz", 637485365, "100366696@alumnos.uc3m.es",  0 ,true );
  public filtro ="";
  public filtrados: Contacto[] = [];

  public getFiltro(){

    this.filtrados = [];
    if (this.filtro==""){
      return this.agenda;
    } else {
      for(let i=0; i<this.agenda.length; i++){
        if(this.agenda[i].nombre.toLowerCase().includes(this.filtro.toLocaleLowerCase())){
            this.filtrados.push(this.agenda[i]);
            console.log(this.filtrados);
        }
      }

    }
    return this.filtrados;
  }


  constructor (private gs: GlobalService){
    this.gs.añadirContacto(this.user1);
    this.agenda = this.gs.contactos;
   //console.log(this.gs.datos_globales['nombre']) ;
  }
}

