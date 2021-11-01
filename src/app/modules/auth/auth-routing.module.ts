import {Routes} from "@angular/router";
import {RegistroComponent} from "./registro";
import {LoginComponent} from "./login";

export const AuthRoutes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
