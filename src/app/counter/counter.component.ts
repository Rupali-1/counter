import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counter = 0;
  history: { message: string; type: 'increment' | 'decrement' | 'reset' }[] =
    [];

  incrementValue() {
    this.counter++;
    this.history.unshift({
      message: `[+1] Counter is now ${this.counter}`,
      type: 'increment',
    });
  }

  decrementValue() {
    this.counter--;
    this.history.unshift({
      message: `[-1] Counter is now ${this.counter}`,
      type: 'decrement',
    });
  }

  resetData() {
    this.counter = 0;
    this.history.unshift({
      message: `[Reset] Counter is now ${this.counter}`,
      type: 'reset',
    });
  }

  clearData() {
    this.history = [];
  }
}
