import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['../app.component.scss','./in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
