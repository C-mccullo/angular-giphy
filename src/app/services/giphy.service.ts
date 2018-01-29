import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import { GIFS } from "../../data/mock-gifs";
import { Gif } from '../gif/gif';

// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" })
// }

@Injectable()
export class GiphyService {

  private giphyTrending = `http://api.giphy.com/v1/gifs/trending?api_key=${environment.API_KEY}&limit=15`;
  private giphySearch = `http://api.giphy.com/v1/gifs/search?api_key=${environment.API_KEY}&limit=10`;
  data: any = {};
  constructor(
    private http: HttpClient,
  ) { }

  getTrendingGifs(): Observable<any> {
    return this.http.get(this.giphyTrending)
  }
  // getTrendingGifs(): Observable<any> {
  //   return this.http.get(this.giphyTrending)
  //     .map((res: Response) => res.json())
  // }

  getSearchGifs(searchTerm: string): Observable<any> {
    if (!searchTerm.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    } else {
      const searchQuery = `${this.giphySearch}&q=${searchTerm}`
      return this.http.get(searchQuery)
    }
  }

  getFavouriteGifs(): void {
    console.log(window.localStorage)
  }

  postFavouriteGif(): void {
    console.log("post to localStorage")
  }

  // HTTP OPERATION ERROR HANDLER
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log error to console

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
