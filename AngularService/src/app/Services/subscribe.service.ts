import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn:'root'
})
export class SubscribeService {

  constructor() { }

  OnSubscribeClicked(value: string)
  {
    alert("You have subscribed for " + value + " subscription.")
  }
}
