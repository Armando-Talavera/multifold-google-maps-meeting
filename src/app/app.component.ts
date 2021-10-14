import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tenfold AGM';
  lat = 51.678418;
  lng = 7.809007;
  numberOfMaps: string[] = [];

  addMap() {
    this.numberOfMaps.push('New Map')
  }
}
