import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { Course } from "./Models/course";
import { CourseService } from "./Services/course.service";


export const CanActivate = () => {
    const  authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isLogged)
    {
        return true;
    }
    else
    {
        router.navigate(['/Login']);
        return false;
    }
}

export const CanActivateChild = () => {
    CanActivate();
}

export const resolve = () => {
    const courseService = inject(CourseService);
    return courseService.getAllCourses();
}