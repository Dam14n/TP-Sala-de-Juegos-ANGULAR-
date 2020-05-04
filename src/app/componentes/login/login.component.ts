import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { AuthService } from './../../servicios/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  progreso: number;
  progresoMensaje = 'esperando...';
  logeando = false;
  progresoDeAncho: string;
  intentoHacerLogin = false;
  showInvalidLogin = false;

  clase = 'progress-bar progress-bar-info progress-bar-striped ';
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    clave: new FormControl('', Validators.required)
  });
  constructor(
    private authService: AuthService,
    private router: Router) {
    this.progreso = 0;
    this.progresoDeAncho = '0%';
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/Principal']);
    }
  }

  get form() {
    return this.loginForm.controls;
  }

  entrar() {
    if (!this.loginForm.invalid) {
      this.intentoHacerLogin = true;
      const usuario = this.loginForm.value.usuario;
      const clave = this.loginForm.value.clave;
      this.authService.login(usuario, clave, this.moverBarraDeProgreso, this.onLoginError);
    }
  }

  entrarComoAdmin() {
    this.loginForm.controls.usuario.setValue('admin');
    this.loginForm.controls.clave.setValue('admin');
    this.entrar();
  }

  onLoginError = () => {
    this.showInvalidLogin = true;
    const timer = TimerObservable.create(200, 50);
    let time = 0;
    this.subscription = timer.subscribe(t => {
      time = time + 1;
      if (time === 50) {
        this.showInvalidLogin = false;
      }
    });
  }

  public moverBarraDeProgreso = () => {
    const timer = TimerObservable.create(200, 50);
    this.logeando = true;
    this.clase = 'progress-bar progress-bar-danger progress-bar-striped active';
    this.progresoMensaje = 'NSA spy...';
    this.subscription = timer.subscribe(t => {
      this.progreso = this.progreso + 1;
      this.progresoDeAncho = this.progreso + 20 + '%';
      switch (this.progreso) {
        case 15:
          this.clase = 'progress-bar progress-bar-warning progress-bar-striped active';
          this.progresoMensaje = 'Verificando ADN...';
          break;
        case 30:
          this.clase = 'progress-bar progress-bar-Info progress-bar-striped active';
          this.progresoMensaje = 'Adjustando encriptación..';
          break;
        case 60:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Recompilando Info del dispositivo..';
          break;
        case 75:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Recompilando claves facebook, gmail, chats..';
          break;
        case 85:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Instalando KeyLogger..';
          break;
        case 100:
          this.subscription.unsubscribe();
          this.logeando = true;
          this.router.navigate(['/Principal']);
          return;
      }
    });
  }

}
