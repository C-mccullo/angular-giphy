import { Component, OnInit } from '@angular/core';
import { GifBlock } from "./gif-block/gif-block";
import { GIFS } from "../../data/mock-gifs";

@Component({
  selector: 'app-gif-container',
  templateUrl: './gif-container.component.html',
  styleUrls: ['./gif-container.component.scss']
})

export default class GifContainerComponent implements OnInit {

  gifs = GIFS;
  favGifs: GifBlock[] = [];
  // favGifs: GifBlock[] = [
  //   {
  //     id: 1,
  //     rating: 2,
  //     title: "Poochies",
  //     url: "https://media.giphy.com/media/5oHQE3n1eBV5e/giphy.gif"
  //   },
  //   {
  //     id: 2,
  //     url: "https://media.giphy.com/media/u8mNsDNfHCTUQ/giphy.gif",
  //     title: "Oh Hey",
  //     rating: 1,
  //   }];

  constructor() { }

  ngOnInit() {
  }

  favGif(gif: GifBlock): void {
    const gifIndex: number = this.favGifs.indexOf(gif);
    
    if (gifIndex === -1) {
      this.favGifs.push(gif);
      console.log("adding favs", this.favGifs);
    } else {
      console.log(this.favGifs)
    }
  }

  removeFavGif(favoriteGif: GifBlock): void {
    console.log(this.favGifs);
    const gifIndex: number = this.favGifs.indexOf(favoriteGif);
    if (gifIndex !== -1) {
      this.favGifs.splice(gifIndex, 1);
    }
  }
}
