import {Routes} from "@angular/router";
import {FullPostComponent} from "./full-post";

export const PostRoutes: Routes = [
  {
    path: 'post/:idPost',
    component: FullPostComponent
  }
]
