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

 ngOnInit()
 {
  //Accessing static data
  // this.activatedRoute.data.subscribe((data) => {
  //   this.course = data
  // })

  //In order to access dynamic data, we need ROuter object 
  // this.course = this.router.getCurrentNavigation().extras.state;
  this.course = history.state;

 }

}
