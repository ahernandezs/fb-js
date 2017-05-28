import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FBService } from '../services/fb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMail: string;
  errorPass: string;
  usuarios: Array<any>;

  constructor(
    private router: Router,
    private fbservice: FBService
  ) { }

  ngOnInit() {
  }

  login(){
    if(typeof this.email === 'undefined' || this.email === '' ){
      this.errorMail = 'El correo no puede estar en blanco';
    }else{
      this.errorMail = '';
      if(typeof this.password === 'undefined' || this.password === '' ){
        this.errorPass = 'La contraseña no puede estar en blanco';
      }else{
        this.errorPass = '';
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.email)){
          this.errorMail = 'El correo debe ser válido'
        }else{
          this.fbservice.login().subscribe(
            res => {
              this.usuarios = res;
              for(let i = 0; i < this.usuarios.length; i++){
                if( this.usuarios[i].user === this.email && this.usuarios[i].pass === this.password ){
                  localStorage.setItem('fb_auth', this.email);
                  this.router.navigate(['/wall']);
                }
              }
              this.errorMail = 'Usuario o contraseña inválida'
            }
          );
        }
      }
    }
  }

}
