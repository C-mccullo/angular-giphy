import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinks = [
    { text: "check out on github", url: "https://github.com/C-mccullo/angular-giphy" },
    { text: "made by me", url: "https://colinmccullo.ca" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
