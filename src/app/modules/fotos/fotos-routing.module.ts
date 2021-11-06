import {Routes} from "@angular/router";
import {FotosComponent} from "./fotos/fotos.component";

export const FotosRoutes: Routes = [
  {
    path: 'fotos',
    component: FotosComponent
  },
  {
    path: 'perfil/:id/fotos',
    component: FotosComponent
  }
]
