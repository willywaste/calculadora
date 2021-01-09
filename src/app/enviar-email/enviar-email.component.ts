import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css']
})
export class EnviarEmailComponent implements OnInit {

  FormularioFormGroup: FormGroup

  constructor(
    private _builder: FormBuilder,
    private http: HttpClient,
  ) {
  
    this.FormularioFormGroup = new FormGroup ({

      email : new FormControl('',Validators.required), 
      
      nombreapellido : new FormControl('',Validators.required),
      
      mensaje: new FormControl('',Validators.required)
      });

  }

  ngOnInit(): void { }

  mostrar(value) {
    console.log(value)

    this.enviarmail(value)
  }

  enviarmail(value) {

    console.log("LOADING")

    let request = {

      "destinatario": value.email,
      "asunto": value.nombreapellido,
      "mensaje": value.mensaje
    }


    this.http.post<any>('http://192.168.0.11:8989/mailsender/enviar', request).


      subscribe({

        next: response => {
          console.log(response);
        },



        error: error => {
          console.log(error)
        }


      })
  }

}
