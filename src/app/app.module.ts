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
import {AmigosModule} from "./modules/amigos";
import {ConfiguracoesModule} from "./modules/configuracoes/configuracoes.module";

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
    AmigosModule,
    HomeModule,
    PostModule,
    AuthModule,
    ConfiguracoesModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders, CookieService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
