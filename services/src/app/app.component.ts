import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SERVICES';
  ngfor = 'NgFor example';
  array = [
    'Index 1',
    'Index 2',
    'Index 3',
    'Index 4',
    'Index 5'
  ];
  
}
