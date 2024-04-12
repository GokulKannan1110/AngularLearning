import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'AngularObservable';

  data: any[] = [];

  array1 = [1,3,5,7,9];
  array2 = ['A','B','C',];

  constructor(private renderer: Renderer2){

  }
  

  @ViewChild('createBtn')
  createBtn : ElementRef;
  createBtnObs;

  //Observable
  // myObservable = new Observable((observer) => {
  //   setTimeout(() => { observer.next(1) }, 1000);
  //   setTimeout(() => { observer.next(2) }, 2000);
  //   setTimeout(() => { observer.next(3) }, 3000);
  //   setTimeout(() => { observer.error(new Error('Something went wrong. Please try again later!')) }, 3000);
  //   setTimeout(() => { observer.next(4) }, 4000);
  //   setTimeout(() => { observer.next(5) }, 5000);
  //   setTimeout(() => { observer.complete() }, 6000);
  // });

  //All the data is streamed/emitted one after the other and automatically sends the complete signal once all the data are emitted
  //myObservable = of(this.array1, this.array2, 20, 30 );

  //from operator accespts one argument which shud be an iterable.
  //Also, we can use this to convert a promise ito an observable
promiseData = new Promise((resolve, reject) => {
  resolve([10,20,30,40,'50']);
})

  //myObservable = from(this.array1);

  //myObservable = from(this.promiseData);

  myObservable = from([2,4,6,8,10,12]).pipe(map((val) =>{
    return val * 5;
  }), filter((val) => {
       return val % 4 === 0;
  }));

  //10,20,30,40,50
  // transformObs = this.myObservable.pipe(map((val) =>{
  //   return val * 5;
  // }))

  // filteredObs = this.transformObs.pipe(filter((val) => {
  //   return val % 4 === 0;
  // }))

  //With the help of pipe operator, we are able to chain the operator methods
  // filteredObs = this.myObservable.pipe(map((val) =>{
  //   return val * 5;
  // }), filter((val) => {
  //      return val % 4 === 0;
  // }))


  GetAsyncData(){
    //Instead of subscribing myObservable, we can subscribe transformObs
    // this.myObservable.subscribe({
    //   next: (val: any) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error(err){
    //     alert(err.message);
    //   },
    //   complete(){ 
    //     alert('All the data is streamed.');
    //   }
    // })

    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){ 
        alert('All the data is streamed.');
      }
    })
  }

  // buttonClicked()
  // {
  //   let count = 0;
  //   //Here we are creating an observable from the click event and 
  //   this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click')
  //                       .subscribe((data) => {
  //                         console.log(data);
  //                         this.ShowItem(++count);
  //                       })
  // }

  ngAfterViewInit(){
    //this.buttonClicked();
  }
  
  // ShowItem(count: number)
  // {
  //   let divelem = this.renderer.createElement('div')
  //   //let divelem = document.createElement('div');
  //   divelem.innerHTML = 'Item' + count;
  //   //Since Angular could not apply any encapsulation to the newly generated div by 'document', the 'data-list' would have no effect on them; 
  //   //instead, only the global'style.css' CSS would have an effect on them, again this will violate the encapsulation protocol that Angular is trying to impose. It would be best to create them using a renderer (Renderer2): let div = this.renderer.createElement('div')
  //   divelem.className = 'data-list'
  //   document.getElementById('container').appendChild(divelem);
  // }
}
