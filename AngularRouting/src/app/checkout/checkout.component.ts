import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 activatedRoute: ActivatedRoute = inject(ActivatedRoute);
 router: Router = inject(Router);
 course;

 /**
  *
  */
 constructor() {
  this.course = this.router.getCurrentNavigation().extras.state;  
 }

 ngOnInit()
 {
  //Accessing static data
  // this.activatedRoute.data.subscribe((data) => {
  //   this.course = data
  // })

  //In order to access dynamic data, we need ROuter object 
  //Looks like this below code: works inside the constructor but not inside ngOnInit. Why is that ?
  //it should be called inside the constructor when the router is still in transition and the destination component get initialised.
  //this.course = this.router.getCurrentNavigation().extras.state;
  
  
  //this.course = history.state;

 }

}
