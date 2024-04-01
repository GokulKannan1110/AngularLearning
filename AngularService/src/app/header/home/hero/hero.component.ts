import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  //This is one way to inject dependency
  // constructor(private subscriberService: SubscribeService){

  // }

  //And we have one more new way to inject dependency from angular 14
  subscriberService = inject(SubscribeService);

  OnSubsClick()
  {
    this.subscriberService.OnSubscribeClicked("Monthly");
  }
}
