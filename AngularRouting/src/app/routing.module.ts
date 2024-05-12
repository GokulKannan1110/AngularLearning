import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from './app.component';
import { ServicesService } from './Services/services.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { CourseService } from './Services/course.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/authguard.service";
import { CanActivate, CanActivateChild, resolve } from "./auth.guard";


//Here, we have defined the routes
const routes: Routes = [
    //we can configure the root url to show the home page in two ways
    //One by mapping with Home component.
    //Other way is redirecting to Homw page path Url
    {path:'', component: HomeComponent},
    //{path:'', redirectTo: 'Home', pathMatch:'full'},  
    {path:'Home', component: HomeComponent},
    {path:'About', component: AboutComponent},
    {path:'Contact', component: ContactComponent, canDeactivate: [(comp: ContactComponent) => {return comp.canExit();}]},
    {path:'Courses', component: CoursesComponent, resolve: {courses: resolve}},
    //{path:'Courses/Course/:id', component: CourseDetailComponent},
    {path: 'Courses', canActivateChild: [CanActivateChild], children: [
      {path: 'Course/:id', component: CourseDetailComponent},
      {path: 'popular', component: PopularComponent},
      //Using canActivate Route guard we are protecting this route to be accessed by unauthorized user
      //the data property can be used to pass the stati data through ActivatedRoute
      // {path: 'Checkout', component: CheckoutComponent, data: {name: 'test Couse', price: 50}}
      {path: 'Checkout', component: CheckoutComponent}
    ] },
    {path:'Login', component: LoginComponent},
    //WildCard Route which must be specified at the end of all the defined routes.
    {path:'**', component: NotFoundComponent}
  
  ]
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule
{

}