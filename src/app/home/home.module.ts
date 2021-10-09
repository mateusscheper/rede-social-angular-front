import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent, TimelineComponent} from './timeline';
import {LeftpanelComponent} from './leftpanel';
import {RightpanelComponent} from './rightpanel';
import {NavbarComponent} from './navbar';
import {NovopostComponent} from './novopost';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataPostPipe} from "../pipes";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent,
    NavbarComponent,
    PostComponent,
    NovopostComponent,
    DataPostPipe,
    HomeComponent
  ],
    exports: [
        TimelineComponent,
        LeftpanelComponent,
        RightpanelComponent,
        NavbarComponent,
        DataPostPipe
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule
    ],
  providers: [
  ]
})
export class HomeModule {
}
