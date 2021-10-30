import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login';
import {RegistroComponent} from './registro';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule {
}
