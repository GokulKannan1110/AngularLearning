import { Route, RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { FeaturedComponent } from "./featured/featured.component";

export const COURSES_ROUTES : Route[] = [
    {path:'', component: CoursesComponent},
    {path:'featured', component: FeaturedComponent}
]
