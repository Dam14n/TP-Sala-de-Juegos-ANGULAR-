import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti-ganador',
  templateUrl: './tateti-ganador.component.html',
  styleUrls: ['./tateti-ganador.component.css']
})
export class TatetiGanadorComponent implements OnInit {
  @Input() imagen: string;
  @Input() valorFichaJugador: string;

  constructor() { }

  ngOnInit(): void {
  }

}
