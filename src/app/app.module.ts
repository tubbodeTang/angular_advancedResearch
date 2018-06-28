import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WebsocketComponent } from './websocket/websocket.component';
import { SvgExampleComponent } from './svg-example/svg-example.component';

//import { WebsocketRxService } from "./websocket-rx.service";

import "snapsvg-cjs";


@NgModule({
  declarations: [
    AppComponent,
    WebsocketComponent,
    SvgExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
