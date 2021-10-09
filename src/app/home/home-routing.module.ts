import {Routes} from "@angular/router";
import {HomeComponent} from "./home";

export const HomeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
