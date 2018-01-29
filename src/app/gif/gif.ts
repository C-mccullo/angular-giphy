// import { Component } from '@angular/core';

export class Gif {
  constructor(id: string, url: string, title: string, rating: number) {
    this.id = id,
    this.url = url;
    this.title = title;
    this.rating = rating;
  }
  id: string;
  url: string;
  title: string;
  rating: number; 

}

