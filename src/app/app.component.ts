import { Component } from '@angular/core';

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

multiplication(){
  let res = this.resultado = (this.numero1 * this.numero2);
  console.log (res);
}
}
