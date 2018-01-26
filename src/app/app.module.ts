import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GifContainerComponent } from './gif-container/gif-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GifContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
