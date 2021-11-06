import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeModule} from "./modules/home";
import {PostModule} from "./modules/post";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "./modules/auth";
import {authInterceptorProviders} from "./security/auth.interceptor";
import {CookieService} from "ngx-cookie-service";
import {SharedModule} from "./modules/shared";
import {PerfilModule} from "./modules/perfil";
import {FotosModule} from "./modules/fotos";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    PerfilModule,
    FotosModule,
    HomeModule,
    PostModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders, CookieService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
