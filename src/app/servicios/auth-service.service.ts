import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // TODO refactor esta clase para usar firebase
  constructor() { }

  public isAuthenticated(): boolean {
    const usuario = localStorage.getItem('usuario');
    return usuario !== null && usuario !== undefined;
  }

  public login(usuario: string, clave: string, callback: Function) {
    if (usuario === 'admin' && clave === 'admin') {
      localStorage.setItem('usuario', usuario);
      callback();
    }
  }

  public logout() {
    localStorage.removeItem('usuario');
  }

}
