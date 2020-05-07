import { CartaMemotest } from '../../clases/CartaMemotest';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carta-memotest',
  templateUrl: './carta-memotest.component.html',
  styleUrls: ['./carta-memotest.component.css']
})
export class CartaMemotestComponent implements OnInit {
  @Input() carta: CartaMemotest;
  @Output() onSeleccionarCarta = new EventEmitter<CartaMemotest>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCarta(carta: CartaMemotest) {
    if (!carta.estaBloqueada()) {
      this.onSeleccionarCarta.emit(carta);
    }
  }

  mostrarImagen(carta: CartaMemotest): string {
    return carta.estaBloqueada() || carta.estaSeleccionada() ? carta.getImagen() : carta.getDorso();
  }
}
