/*import { Identifiers } from '@angular/compiler';
import { Component, Injectable } from '@angular/core';
import { GlobalService } from './global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()

export class Contacto {
  public id: Number ;
  public nombre: String ;
  public telefono: Number ;
  public email: String;
  public tipo: Number; //Compañero,trabajo,personal
  public habitual: Boolean ;


  constructor ( id:Number, nombre:String, telefono:Number, email:String, tipo:Number,habitual:Boolean){
    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this. email = email;
    this.tipo = tipo;
    this.habitual = habitual;




  }
}*/

export interface IContacto {
   id: Number ;
   nombre: String ;
   telefono: Number ;
   email: String;
   tipo: Number; //Compañero,trabajo,personal
   habitual: Boolean ;
}

export class Contacto{
  public id: Number ;
  public nombre: String ;
  public telefono: Number ;
  public email: String;
  public tipo: Number; //Compañero,trabajo,personal
  public habitual: Boolean ;

  constructor ( id:Number, nombre:String, telefono:Number, email:String, tipo:Number,habitual:Boolean){
    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this. email = email;
    this.tipo = tipo;
    this.habitual = habitual;
  }

}

