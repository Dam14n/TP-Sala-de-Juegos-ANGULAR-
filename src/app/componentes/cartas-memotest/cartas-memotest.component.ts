import { CartaMemotest } from './../../clases/CartaMemotest';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cartas-memotest',
  templateUrl: './cartas-memotest.component.html',
  styleUrls: ['./cartas-memotest.component.css']
})
export class CartasMemotestComponent implements OnInit {
  @Input() cartas: Array<CartaMemotest>;
  @Output() onSeleccionarCarta = new EventEmitter<CartaMemotest>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCarta(carta: CartaMemotest) {
    if (!carta.estaBloqueada()) {
      this.onSeleccionarCarta.emit(carta);
    }
  }
}
