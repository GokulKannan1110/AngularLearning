import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesModule } from './courses/courses.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'courses', loadChildren: () => import('./courses/course-route.module').then(mod => mod.CourseRouteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
