import { Component, Input, OnInit } from '@angular/core';
import { Gif } from "../gif/gif";

@Component({
  selector: 'app-gif-search-results',
  templateUrl: './gif-search-results.component.html',
  styleUrls: ['./gif-search-results.component.scss']
})

export class GifSearchResultsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  @Input() favGifs: any[];
  @Input() gifs: any;

  isFavorite(id: string): boolean{
    if (this.favGifs.some(e => e.id === id)) {
      return true
    } else false
  }
}
