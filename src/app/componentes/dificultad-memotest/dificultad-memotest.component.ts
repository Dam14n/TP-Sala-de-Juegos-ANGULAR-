import { Dificultad } from './../../clases/Dificultad';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dificultad-memotest',
  templateUrl: './dificultad-memotest.component.html',
  styleUrls: ['./dificultad-memotest.component.css']
})
export class DificultadMemotestComponent implements OnInit {
  @Output() onElegirDificultad = new EventEmitter<Dificultad>();
  constructor() { }

  ngOnInit(): void {
  }

  elegirDificultadFacil() {
    this.onElegirDificultad.emit(Dificultad.FACIL);
  }

  elegirDificultadMedio() {
    this.onElegirDificultad.emit(Dificultad.MEDIO);
  }

  elegirDificultadDificil() {
    this.onElegirDificultad.emit(Dificultad.DIFICIL);
  }

}
