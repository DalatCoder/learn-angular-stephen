import { Component, ComponentFactoryResolver } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = lorem.sentence();
  enteredText: string = '';
  showSuccess: boolean = false;

  onInputChange(value: string) {
    this.enteredText = value;

    this.showSuccess = this.randomText === this.enteredText ? true : false;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'wrong';
  }
}
