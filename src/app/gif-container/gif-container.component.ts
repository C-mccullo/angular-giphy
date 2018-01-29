import { Component, OnInit } from '@angular/core';
import { Gif } from "../gif/gif";

// Services
import { GiphyService } from "../services/giphy.service" 

@Component({
  selector: 'app-gif-container',
  templateUrl: './gif-container.component.html',
  styleUrls: ['./gif-container.component.scss']
})

export class GifContainerComponent implements OnInit {

  gifs: Gif[];
  favGifs: Gif[] = [];

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.getInitialGifs();
  }

  onSearchGifs(searchGifs: any[]): void {
    console.log("search gifs in parent", searchGifs)
    this.gifs = searchGifs;
  }

  getInitialGifs(): void {
    this.giphyService.getTrendingGifs()
      .subscribe(
        gifs => {
          console.log(gifs);
          const formattedGifs = gifs.data.map(gif => {
            return new Gif(gif.id, gif.images.downsized.url, gif.title, 0)
            // { 
            //   id: gif.id, 
            //   url: gif.images.downsized.url,
            //   title: gif.title,
            //   rating: 0 
            // }
          })
          this.gifs = formattedGifs;
        },
        err => console.log(err)
      )
  }

  favGif(gif: Gif): void {
    const gifIndex: number = this.favGifs.indexOf(gif);
    
    if (gifIndex === -1) {
      this.favGifs.push(gif);
    } else {
      // console.log(this.favGifs)
    }
  }

  removeFavGif(favoriteGif: Gif): void {
    const gifIndex: number = this.favGifs.indexOf(favoriteGif);
    if (gifIndex !== -1) {
      this.favGifs.splice(gifIndex, 1);
    }
  }
}
