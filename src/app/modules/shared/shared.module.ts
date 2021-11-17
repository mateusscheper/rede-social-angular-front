import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from "./post";
import {NavbarComponent} from "./navbar";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DataBrPipe} from "./pipes";
import {ReportModalComponent} from './report-modal';

@NgModule({
  declarations: [
    PostComponent,
    NavbarComponent,
    DataBrPipe,
    ReportModalComponent
  ],
  exports: [
    PostComponent,
    NavbarComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule {
}
