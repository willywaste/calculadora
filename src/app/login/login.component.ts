import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor (){}
  ngOnInit(): void {
   
  }
 
miFormulario = new FormGroup ({

username : new FormControl('',Validators.required), 

pass : new FormControl('',Validators.required),

});
}
