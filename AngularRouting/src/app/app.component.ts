import { Component, inject } from '@angular/core';
import { Event, EventType, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Routing';

  showLoader: Boolean = false;

  router: Router = inject(Router);
  ngOnInit()
  {
    this.router.events.subscribe((routerEvent: Event) => {
      // if(routerEvent instanceof NavigationStart)
      //   this.showLoader = true;
      // if(routerEvent instanceof NavigationEnd 
      //   || routerEvent instanceof NavigationCancel
      //   || routerEvent instanceof NavigationError)
      //   this.showLoader = false;  
        
      //For working with events you can use EventType enumeration (from @angular/router)
      // instead of using instanceof logic
        if(routerEvent.type === EventType.NavigationStart)
          this.showLoader = true;
        if(routerEvent.type === EventType.NavigationEnd 
          || routerEvent.type === EventType.NavigationCancel
          || routerEvent.type === EventType.NavigationError)
          this.showLoader = false;    
    })
  }
}
