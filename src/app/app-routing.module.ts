import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostRoutes} from "./post/post-routing.module";
import {HomeRoutes} from "./home/home-routing.module";

export const routes: Routes = [
  ...HomeRoutes,
  ...PostRoutes
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
