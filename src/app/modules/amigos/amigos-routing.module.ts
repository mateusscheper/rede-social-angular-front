import {Routes} from "@angular/router";
import {AmigosComponent} from "./amigos/amigos.component";

export const AmigosRoutes: Routes = [
  {
    path: 'amigos',
    component: AmigosComponent
  },
  {
    path: 'perfil/:id/amigos',
    component: AmigosComponent
  }
]
