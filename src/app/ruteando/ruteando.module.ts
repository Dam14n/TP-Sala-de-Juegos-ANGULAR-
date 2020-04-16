import { NgModule } from '@angular/core';
// importo del module principal
import { RouterModule } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component';
import { ListadoComponent } from '../componentes/listado/listado.component';
import { LoginComponent } from '../componentes/login/login.component';
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { AnagramaComponent } from './../componentes/anagrama/anagrama.component';
import { MemotestComponent } from './../componentes/memotest/memotest.component';
import { PptComponent } from './../componentes/ppt/ppt.component';
import { AuthGuardService } from './../servicios/auth-guard-service.service';

const MiRuteo = [
  { path: 'Jugadores', component: JugadoresListadoComponent, canActivate: [AuthGuardService] },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Mapa', component: MapaDeGoogleComponent, canActivate: [AuthGuardService] },
  { path: 'QuienSoy', component: QuienSoyComponent, canActivate: [AuthGuardService] },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Principal', component: PrincipalComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'Listado', component: ListadoComponent, canActivate: [AuthGuardService] },
  { path: 'Paises', component: ListadoDePaisesComponent, canActivate: [AuthGuardService] },
  {
    path: 'Juegos',
    component: JuegosComponent,
    children:
      [{ path: '', component: MenuCardComponent },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
      { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'PPT', component: PptComponent },
      { path: 'Anagrama', component: AnagramaComponent },
      { path: 'Memotest', component: MemotestComponent }],
    canActivate: [AuthGuardService]
  },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
