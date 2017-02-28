import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  words: string = "We work in the dark to serve the light."

  constructor() { }

  ngOnInit() {
  }

}
