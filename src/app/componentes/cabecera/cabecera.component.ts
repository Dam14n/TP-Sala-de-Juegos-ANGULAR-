import { AuthService } from './../../servicios/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

  salir() {
    this.authService.logout();
    this.navegarA('Login');
  }

}
