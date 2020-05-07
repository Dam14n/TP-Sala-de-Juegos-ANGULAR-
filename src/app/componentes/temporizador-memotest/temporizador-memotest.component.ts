import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temporizador-memotest',
  templateUrl: './temporizador-memotest.component.html',
  styleUrls: ['./temporizador-memotest.component.css']
})
export class TemporizadorMemotestComponent implements OnInit {
  @Output() onPerder = new EventEmitter<any>();
  DEFAULT_TIME = 60;
  segundosRestantes = this.DEFAULT_TIME;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.segundosRestantes > 0) {
        this.segundosRestantes--;
      } else {
        this.segundosRestantes = this.DEFAULT_TIME;
        clearInterval(this.interval);
        this.onPerder.emit();
      }
    }, 1000);
  }

}
