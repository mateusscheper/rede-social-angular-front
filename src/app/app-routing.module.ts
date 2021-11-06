import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostRoutes} from "./modules/post/post-routing.module";
import {HomeRoutes} from "./modules/home/home-routing.module";
import {AuthRoutes} from "./modules/auth/auth-routing.module";
import {PerfilRoutes} from "./modules/perfil/perfil-routing.module";
import {FotosRoutes} from "./modules/fotos/fotos-routing.module";
import {AmigosRoutes} from "./modules/amigos/amigos-routing.module";

export const routes: Routes = [
  ...HomeRoutes,
  ...PostRoutes,
  ...AuthRoutes,
  ...PerfilRoutes,
  ...FotosRoutes,
  ...AmigosRoutes,
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
