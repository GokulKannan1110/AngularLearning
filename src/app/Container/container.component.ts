import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { DemoComponent } from "../demo/demo.component";

@Component({
    selector:'app-container',
    templateUrl :'./container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewInit{
    //we are passing the local ref variable of the DOB input element to the view child, so this
    //property is assigned with the reference to that input element
    @ViewChild('dobInput') dateOfBirth : ElementRef;
    @ViewChild('ageInput') age : ElementRef;
    //Accessing Component using Viewchild 
    @ViewChild('DemoComponent', {static: true}) demoComp: DemoComponent;
    hello : string = '';
    //Accessing html element from view template using Viewchild 
    calculateAge()
    {
        let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
        let currentYear = new Date().getFullYear();
        let age = currentYear - birthYear;
        this.age.nativeElement.value = age;
        // console.log(this.dateOfBirth);
        // console.log(this.age);
    }
    isDemoComponentReady: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges(); // Manually trigger change detection
    this.isDemoComponentReady = true;
    this.callSayHello();
    //console.log("Container component is fully initialized")
  }

  callSayHello() {
    if (this.isDemoComponentReady && this.demoComp) {
      const result = this.demoComp.sayHello();
      //console.log(result);
    } else {
      //console.error('DemoComponent is not available or not yet initialized.');
    }
  }

  videos= [
    {title: 'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/image1.jpg'},
    {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/image2.jpg'},
    {title: 'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/image3.jpg'}
  ]

  mostlikedVideo = this.getmostLikedVideo();

  getmostLikedVideo()
  {
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}