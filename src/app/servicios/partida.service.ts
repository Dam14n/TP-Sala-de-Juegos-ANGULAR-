import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { Partida } from '../clases/Partida';
import { take } from 'rxjs/operators';

@Injectable()
export class PartidaService {
  private partidasCollectionRef: AngularFirestoreCollection<any>;
  private partidas: Observable<Array<any>>;
  private partidasList: Array<Partida>;

  constructor(private firestore: AngularFirestore) {
    this.partidasCollectionRef = this.firestore.collection<Partida>('partidas');
    this.partidas = this.partidasCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
    this.partidas.subscribe(partidas => this.partidasList = partidas);
  }

  public listar(): Array<Partida> {
    return this.partidasList;
  }

  public obtenerPartidas = (): Observable<Array<any>> => {
    return this.partidas;
  }

  public listarPromesa(): Promise<Array<any>> {
    return this.partidas.pipe(take(1)).toPromise();
  }

  public guardarPartida = (partida: Partida) => {
    this.partidasCollectionRef.add({ gano: partida.gano, jugador: partida.jugador, nombre: partida.nombre });
  }

  obtenerPartidasParaJuego(nombreJuego: string) {
    return this.obtenerPartidas().map(partidas => partidas.filter(partida => partida.nombre === nombreJuego));
  }

}
