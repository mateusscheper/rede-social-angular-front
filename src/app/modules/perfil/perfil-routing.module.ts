import {Routes} from "@angular/router";
import {PerfilComponent} from "./perfil";

export const PerfilRoutes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'perfil/:id',
    component: PerfilComponent
  }
]
