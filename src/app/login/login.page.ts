import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

interface Usuario {
  correo: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario={
    correo: ''
  }
  constructor(private router: Router){ }

  ingresar() {
    // Crear un objeto NavigationExtras para pasar el correo a la página home
    let navigationExtras: NavigationExtras = {
      state: {
        correo: this.usuario.correo
      }
    };

    this.router.navigate(['/home'], navigationExtras);
  }
  ngOnInit(){
  }
}
