import { Component, OnInit } from '@angular/core';
import { FacebookService } from './facebook.service';  // อ้างอิงบริการที่สร้างไว้

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'facebook';
  titles = 'facebook-sdk-angular';

  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    this.facebookService.setPersistentMenu().subscribe(response => {
      console.log('Persistent Menu Set:', response);
    }, error => {
      console.error('Error setting persistent menu:', error);
    });
  }
}
