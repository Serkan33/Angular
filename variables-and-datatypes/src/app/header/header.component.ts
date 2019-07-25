import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Variables must define in class
   */
  name="Serkan";

  /**
   * Data Types
   * string  -> text
   * boolean -> true/false
   * array -> arrays
   * number -> 0,1,2....4354|1.2,24.5....
   * any -> everythig
   */
  age : number;
  
  constructor() { }

  ngOnInit() {
    let surname = "TAS";
    // this.age="45" -> wrong
    this.age=45;
  }

}
