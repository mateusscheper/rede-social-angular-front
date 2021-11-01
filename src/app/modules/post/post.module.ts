import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullPostComponent} from './full-post';
import {FormsModule} from "@angular/forms";
import {HomeModule} from "../home";
import {SharedModule} from "../shared";

@NgModule({
  declarations: [
    FullPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    SharedModule
  ]
})
export class PostModule {
}
