import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  paramMapObs;

  ngOnInit()
  {
    //This is old way of reading route parameter
    //this.courseId = this.activeRoute.snapshot.params['id'];

    //So, here this snapshot property will contain only the current value of the route. If the value changes, it will not be captured.
    //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    this.paramMapObs =  this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
    });
    
    console.log(this.courseId);
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe();
    console.log('Obs Unsubscribed!!!')
  }
}
