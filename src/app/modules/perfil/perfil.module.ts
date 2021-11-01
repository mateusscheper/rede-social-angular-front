import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerfilComponent} from './perfil';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared";

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
  ],
})
export class PerfilModule {
}
