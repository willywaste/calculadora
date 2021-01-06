import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

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
constructor (){}
 
miFormulario = new FormGroup ({

username : new FormControl('',Validators.required), 

pass : new FormControl('',Validators.required),

});
}
