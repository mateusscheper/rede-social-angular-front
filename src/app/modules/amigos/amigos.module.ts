import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmigosComponent} from './amigos/amigos.component';
import {RouterModule} from "@angular/router";
import {PerfilModule} from "../perfil";

@NgModule({
  declarations: [
    AmigosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfilModule
  ]
})
export class AmigosModule {
}
