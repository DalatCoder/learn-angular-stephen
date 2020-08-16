import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.png',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Moutain',
      imageUrl: 'assets/moutain.png',
      username: 'mountainlover',
      content: 'Here is the picture of a snowy moutain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.png',
      username: 'bikinglover',
      content: 'I did some biking today',
    },
  ];
}
