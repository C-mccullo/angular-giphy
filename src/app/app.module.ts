import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

// Components 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GifContainerComponent } from './gif-container/gif-container.component';
import { FavContainerComponent } from './fav-container/fav-container.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { GifSearchComponent } from './gif-search/gif-search.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GifSearchResultsComponent } from './gif-search-results/gif-search-results.component'

// Services
import { GiphyService } from './services/giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GifContainerComponent,
    FavContainerComponent,
    FooterComponent,
    GifSearchComponent,
    NotFoundPageComponent,
    GifSearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
