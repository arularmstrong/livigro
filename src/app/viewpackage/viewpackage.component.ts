import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewpackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
