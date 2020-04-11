import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from './../../clases/Juego';

@Component({
  selector: 'app-card-juego',
  templateUrl: './card-juego.component.html',
  styleUrls: ['./card-juego.component.css']
})
export class CardJuegoComponent implements OnInit {
  @Input() juego: Juego;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  iniciarJuego() {
    this.router.navigate([`/Juegos/${this.juego.routing}`]);
  }
}
