import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CardJuegoComponent } from './componentes/card-juego/card-juego.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { LoginComponent } from './componentes/login/login.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TatetiGanadorComponent } from './componentes/tateti-ganador/tateti-ganador.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ArchivosJugadoresService } from './servicios/archivos-jugadores.service';
import { JugadoresService } from './servicios/jugadores.service';
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PaisesService } from './servicios/paises.service';
import { PartidaService } from './servicios/partida-service.service';


/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule { }

/**
 * NgModule that includes all Firebase modules.
*/
@NgModule({
  exports: [
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ]
})
export class FirebaseModule { }

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    CardJuegoComponent,
    MemotestComponent,
    PptComponent,
    TatetiComponent,
    TatetiGanadorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    RuteandoModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    BrowserAnimationsModule,
    MaterialModule,
    FirebaseModule
  ],
  providers: [PartidaService, MiHttpService, PaisesService, ArchivosJugadoresService, JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
