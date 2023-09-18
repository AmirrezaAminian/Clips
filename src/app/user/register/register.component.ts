import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
     registerForm = new FormGroup({
      name : new FormControl('' , [
        Validators.required,
        Validators.minLength(3) ,
      ]),
      email : new FormControl(''),
      age : new FormControl(''),
      password : new FormControl(''),
      confirm_password  : new FormControl(''),
      phoneNumber : new FormControl(''),
     })
}
