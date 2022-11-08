import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  items: Array<string> = [];

  addLista($event: string) {
    if($event !== ''){
      console.log($event);
      this.items.push($event);
    }
    console.log(this.items);
  }
}
