import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline';
import {LeftpanelComponent} from './leftpanel';
import {RightpanelComponent} from './rightpanel';
import {NovopostComponent} from './novopost';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home';
import {SharedModule} from "../shared";

@NgModule({
  declarations: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent,
    NovopostComponent,
    HomeComponent
  ],
  exports: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule {
}
