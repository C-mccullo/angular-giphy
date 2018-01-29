import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifContainerComponent } from "./gif-container/gif-container.component";
import { FavContainerComponent } from "./fav-container/fav-container.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component"
const routes: Routes = [
  { path: '', redirectTo: '/gifs', pathMatch: 'full' },
  { path: 'gifs', component: GifContainerComponent },
  { path: 'favourites', component: FavContainerComponent },
  { path: '**', component: NotFoundPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
