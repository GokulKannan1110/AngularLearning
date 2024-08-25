import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', loadComponent: () => import('./about/about.component').then(comp => comp.AboutComponent)},
  {path:'courses', loadChildren: () => import('./courses/course-route').then(mod => mod.COURSES_ROUTES)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
