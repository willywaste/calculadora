import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  division = 0;
  
  multiplication(){
    let res = this.resultado = (this.numero1 * this.numero2);
    console.log (res);
  }
  divisor(){
    let res = this.division = (this.numero1 / this.numero2)
    console.log (res)
  }
  
}
