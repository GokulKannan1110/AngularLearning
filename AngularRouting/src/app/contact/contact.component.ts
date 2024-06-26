import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{

  firstName: string = '';
  lastName: string = '';
  country: string = 'usa';
  message: string = '';

  isSubmitted: Boolean = false;

  OnSubmitClicked()
  {
    this.isSubmitted = true;
  }

  canExit()
  {
    if((this.firstName || this.lastName || this.message) && !this.isSubmitted)
    {
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else{
      return true;
    }
  }
}
