import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = "Welcome to Giphy Library";
  navLinks = [
    { text: "home page", url: "/" },
    { text: "favorites", url: "/favorites" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
