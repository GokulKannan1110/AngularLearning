import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  counter = signal(0);
  doublecounter = computed(() => this.counter() * 2);
  message = signal<string[]>([]);

    constructor()
    {
      effect(() => console.log('New Counter value is ' + this.counter()));
    }
   increment(){
    //this.counter.set(this.counter() + 1);
    this.counter.update((prevValue) => prevValue + 1 ); //whenver new value depends on previous value, use update method.
    this.message.update((prevMessage) => [...prevMessage, 'Current counter value is: ' + this.counter()]); //here it creates new array
    //this.message.mutate ((prevMessage) => prevMessage.push('Current counter value is: ' + this.counter()));
   }

   decrement(){
    this.counter.update((prevValue) => prevValue - 1 ); //whenver new value depends on previous value, use update method.
    this.message.update((prevMessage) => {
      const length = prevMessage.length;
      return prevMessage.splice(0,1);
    });
   }
}
