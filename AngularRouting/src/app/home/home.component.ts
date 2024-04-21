import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
    activeRoute: ActivatedRoute = inject(ActivatedRoute);
    router: Router = inject(Router);
    ngOnInit()
    {
        this.activeRoute.fragment.subscribe((data) => {
            console.log(data);
            this.JumptoSection(data);
        })
    }

    //Jumps to the section based on Id using the fragment
    JumptoSection(section){
        document.getElementById(section).scrollIntoView({behavior: 'smooth'});
        //if we click any of the respective sections and after the view is displayed,
        // if we click on the same section the scroll view doesn't work. it's likely because the browser considers the fragment as already being in view, 
        //this fixed that for me:   
        //this.router.navigate([]);
    }
}