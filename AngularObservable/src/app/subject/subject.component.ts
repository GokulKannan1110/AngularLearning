import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  ngOnInit(){
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random())
    // })

    //const subject = new Subject()
    //const subject = new BehaviorSubject(100)
    // const subject = new ReplaySubject(2)

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    //Subscriber 1
    //subject.subscribe((data) => {console.log("Subscriber 1:" + data)});

    //Subscriber 2
    //subject.subscribe((data) => {console.log("Subscriber 2:" + data)});

    // subject.next(2024);

    // subject.subscribe((data) => {console.log("Subscriber 3:" + data)});

    // subject.next(2025);

    // subject.subscribe((data) => {console.log("Subscriber 4:" + data)});

    // subject.next(Math.random());
 
    //AJAX Call
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // data.subscribe((response) => {console.log(response);});
    // data.subscribe((response) => {console.log(response);});
    // data.subscribe((response) => {console.log(response);});
    // subject.subscribe((response) => {console.log(response);});
    // subject.subscribe((response) => {console.log(response);});
    // subject.subscribe((response) => {console.log(response);});

    //Here, subject is not the provider, but the consumer of the value which the ajax method returns whiich is a ajax observable
    //data.subscribe(subject);

    //Async Subject
    // const asyncSubject = new AsyncSubject();
    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);
    // asyncSubject.complete();

    // asyncSubject.subscribe(data => console.log(`Subscriber1: ${data}`));
    
    //Promise is eager and can emit only a single value.
    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');      
      resolve(100);
    })

    promise.then((data) => console.log(data));
    //Observable is lazy and can emit multiple values.
    const observable = new Observable((sub) => {
      console.log('Observable is called');
      sub.next(100);
      sub.next(200);
      sub.next(300);
    })

    
    observable.subscribe((data) => console.log(data));
  }

}


