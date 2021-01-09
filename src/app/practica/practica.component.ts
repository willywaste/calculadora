import { Component, OnInit } from '@angular/core';
import { Practica } from '../practica';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  practica : Practica ={

    id:1,
    name:"Hola mundo"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
