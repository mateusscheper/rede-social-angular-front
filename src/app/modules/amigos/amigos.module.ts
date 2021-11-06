import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmigosComponent} from './amigos/amigos.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AmigosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AmigosModule {
}
