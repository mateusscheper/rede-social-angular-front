import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerfilComponent} from './perfil';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CardPerfilComponent, SharedModule} from "../shared";

@NgModule({
  declarations: [
    PerfilComponent,
    CardPerfilComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CardPerfilComponent
  ],
})
export class PerfilModule {
}
