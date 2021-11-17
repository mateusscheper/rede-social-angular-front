import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FotosComponent} from './fotos/fotos.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FotosModule {
}
