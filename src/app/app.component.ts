import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];

  isLoggedIn = false;

  username?: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.authService.obterToken();

    if (this.isLoggedIn) {
      const user = this.authService.obterUsuario();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.deslogar();
    window.location.reload();
  }
}
