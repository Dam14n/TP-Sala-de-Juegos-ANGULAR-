import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../clases/Game';

@Component({
  selector: 'app-card-juego',
  templateUrl: './card-juego.component.html',
  styleUrls: ['./card-juego.component.css']
})
export class CardJuegoComponent implements OnInit {
  @Input() juego: Game;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  iniciarJuego() {
    this.router.navigate([`/Juegos/${this.juego.routing}`]);
  }
}
