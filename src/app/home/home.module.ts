import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline';
import { LeftpanelComponent } from './leftpanel';
import { RightpanelComponent } from './rightpanel';
import { NavbarComponent } from './navbar';
import { PostComponent } from './timeline';


@NgModule({
  declarations: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent,
    NavbarComponent,
    PostComponent
  ],
  exports: [
    TimelineComponent,
    LeftpanelComponent,
    RightpanelComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
