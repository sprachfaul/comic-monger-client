import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { IsbnscannerComponent } from "./isbnscanner/isbnscanner.component";


@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicDetailComponent,
    MessagesComponent,
    DashboardComponent,
    IsbnscannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ZXingScannerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
