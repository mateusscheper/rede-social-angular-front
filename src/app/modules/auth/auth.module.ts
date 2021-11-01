import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login';
import {RegistroComponent} from './registro';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared";

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthModule {
}
