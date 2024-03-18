import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularObservable';
  //rxjs injects the observer
  myObservable = new Observable((observer) => {
    console.log('observalble starts');
    setTimeout(()=> {observer.next("1");}, 1000);
    setTimeout(()=> {observer.next("2");}, 2000);
    setTimeout(()=> {observer.next("3");}, 3000);
    setTimeout(()=> {observer.next("4");}, 4000);
    setTimeout(()=> {observer.next("5");}, 5000);
    //setTimeout(() => {observer.error(new Error("Something went wrong! Please Try again later")), 10000})
    setTimeout(()=> {observer.complete();}, 6000);
    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");    
  })

  //myObservable = Observable.create
  ngOnInit()
  {
    //subscribe method takes three optional parameters, these parameters are call back functions -next , error, complete
    this.myObservable.subscribe({
      next:(val) => console.log(val),
      error:(err) => alert("Error Occured!"),
      complete:() => alert("Observable has completed emitting all data")     
    } )
  }
}
