import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { Gif } from '../gif/gif';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent implements OnInit {

  @Input() searchedGifs: Gif[];
  @Output() onSearchEvent = new EventEmitter();

  searchResults: Gif[];

  constructor(private giphyService: GiphyService) { }

  searchGifs(term: string) {
    this.giphyService.getSearchGifs(term)
      .subscribe( results => {
        this.searchedGifs = results.data;
        this.onSearchEvent.emit(results.data);
      })
  }

  ngOnInit() {
  }
}
