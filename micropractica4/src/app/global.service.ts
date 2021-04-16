import { Injectable } from '@angular/core';
import {Contacto } from './contacto'

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class GlobalService {
  contactos: Contacto [] = [];



  constructor() { }


  //user1:Contacto = new Contacto (0, "Claudia Fernández Estebaranz", 637485365, "100366696@alumnos.uc3m.es",  0 ,true );


  añadirContacto(contacto: Contacto){
    this.contactos.push(contacto);
  }


  /*agenda: Contacto[] = [];*/
  //user1: Contacto = new Contacto(0, "Claudia Fernández Estebaranz", 637485365, "100366696@alumnos.uc3m.es", 0, true);



  /*public datos_globales: Contacto = {
    id: 0,
    nombre: 'Claudia Fernández Estebaranz',
    telefono: 637485365,
    email: '100366696@alumnos.uc3m.es',
    tipo:0,
    habitual: true

  };*/

  //public read_contacto (id:number): Contacto{ }

}
