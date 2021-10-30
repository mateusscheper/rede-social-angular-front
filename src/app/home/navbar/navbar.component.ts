import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  title: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  deslogar() {
    this.authService.deslogar()
    this.router.navigate(['/login'])
  }
}
