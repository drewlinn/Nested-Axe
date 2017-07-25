import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nested Axe';
  currentRoute: string = this.router.url;

  constructor(private router: Router) {
    console.log(this.router.url);
  }


}
