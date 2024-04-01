import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //providers: [SubscribeService]
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  constructor(private subscriberService: SubscribeService){

  }

  OnSubsClick()
  {
    this.subscriberService.OnSubscribeClicked("Yearly");
  }
}
