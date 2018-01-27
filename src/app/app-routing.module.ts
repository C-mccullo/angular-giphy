import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import GifContainerComponent from "./gif-container/gif-container.component";
import FavContainerComponent from "./fav-container/fav-container.component";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

const routes: Routes = [
  { path: '/', component: GifContainerComponent },
  { path: '/gifs', component: GifContainerComponent },
  { path: '/favourites', component: FavContainerComponent }, 
];

export class AppRoutingModule { }
