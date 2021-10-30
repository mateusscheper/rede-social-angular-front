import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostRoutes} from "./post/post-routing.module";
import {HomeRoutes} from "./home/home-routing.module";
import {AuthRoutes} from "./auth/auth-routing.module";

export const routes: Routes = [
  ...HomeRoutes,
  ...PostRoutes,
  ...AuthRoutes,
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
