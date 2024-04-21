import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesService } from './Services/services.service';
import { HomeComponent } from './home/home.component';
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
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';


//Here, we have defined the routes
const routes: Routes = [
  //we can configure the root url to show the home page in two ways
  //One by mapping with Home component.
  //Other way is redirecting to Homw page path Url
  {path:'', component: HomeComponent},
  //{path:'', redirectTo: 'Home', pathMatch:'full'},  
  {path:'Home', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'Contact', component: ContactComponent},
  {path:'Courses', component: CoursesComponent},
  //{path:'Courses/Course/:id', component: CourseDetailComponent},
  {path: 'Courses', children: [
    {path: 'Course/:id', component: CourseDetailComponent},
    {path: 'popular', component: PopularComponent}
  ] },
  //WildCard Route which must be specified at the end of all the defined routes.
  {path:'**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    BannerComponent,
    ServicesComponent,
    TestimonyComponent,
    ContactUsComponent,
    PopularComponent,
    CoursesComponent,
    CourseDetailComponent,
    LoginComponent,
    NotFoundComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Here we are registering the routes
    RouterModule.forRoot(routes)
  ],
  providers: [ServicesService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
