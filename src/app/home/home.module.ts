import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent, TimelineComponent} from './timeline';
import {LeftpanelComponent} from './leftpanel';
import {RightpanelComponent} from './rightpanel';
import {NavbarComponent} from './navbar';
import {NovopostComponent} from './novopost';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent,
    NavbarComponent,
    PostComponent,
    NovopostComponent
  ],
  exports: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ]
})
export class HomeModule {
}
